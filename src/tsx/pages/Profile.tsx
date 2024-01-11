import { useEffect, useState } from "react";
import { callAPI, checkIfLogin } from "../utils/Functions";
import { useNavigate } from "react-router-dom";
import { HelpCircle, PieChart, User as UserIcon, Wifi } from "react-feather";
import { AlertTypes, GAMES, HighScore, STATUS_CODES, User } from "../utils/Types";
import AlertModal from "../components/AlertModal";
import LoadingScreen from "../components/LoadingScreen";
import HighScoreBlock from "../components/HighscoreBlock";

export default function Profile() {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();
  const [highscores, setHighscores] = useState<HighScore[]>([])
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    checkIfLogin().then((user) => {
      if (!user) {
        navigate("/login");
        return navigate(0);
      }
      callAPI("/games/highscores", "POST", {userID: user._id, types: [GAMES.MAKINATOR_GUESS, GAMES.MAKINATOR_PI, GAMES.MAKINATOR_ONLINE]}).then(res => {
        if (res.status !== STATUS_CODES.SUCCESS) return setError(true)
        setHighscores(res.highscores ?? []);
      })
      setUser(user);
      setIsLoading(false);
    });
  }, [navigate]);
  return (
    <div className="text-text bg-transparent w-full h-full my-auto flex">
      <div className="m-auto align-middle w-full justify-center flex flex-col ">
        <div className="flex flex-col lg:flex-row mx-auto gap-8">
          {user?.avatar !== "" ? (
            <img src={user?.avatar} className="rounded-xl max-w-72 mx-auto mt-24" />
          ) : (
            <UserIcon size={250} />
          )}
          <div className="flex flex-col align-middle my-auto text-center lg:text-left ">
            <p className="text-5xl 2xs:text-6xl sm:text-8xl font-bold ">{user?.username}</p>
            <p className="text-2xl md:text-3xl text-secondary font-semibold">
              {user?.email}
            </p>
            <p className="text-lg md:text-xl text-accent-300">
              Date Joined:{" "}
              {(() => {
                const d = new Date(user?.dateJoined ?? 0);
                return (
                  [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
                  " " +
                  [d.getHours(), d.getMinutes(), d.getSeconds()].join(":")
                );
              })()}
            </p>
          </div>
        </div>
        <hr className="w-1/2 mx-auto bg-text my-6"></hr>
        <div className="flex mx-auto gap-8 flex-wrap justify-center py-3">
              <HighScoreBlock icon={<HelpCircle size={50} className="mx-auto text-secondary" />} highscore={highscores[0]?.game?.score ?? 0} name="Guess the Number" gamesPlayed={highscores[0]?.gamesPlayed ?? 0} />
              <HighScoreBlock icon={<PieChart size={50} className="mx-auto text-secondary" />} highscore={highscores[1]?.game?.score ?? 0} name="Digits of PI" gamesPlayed={highscores[1]?.gamesPlayed ?? 0} />
              <HighScoreBlock icon={<Wifi size={50} className="mx-auto text-secondary" />} highscore={highscores[2]?.game?.score ?? 0} name="Online Play" gamesPlayed={highscores[2]?.gamesPlayed ?? 0} />
        </div>
      </div>
      <LoadingScreen loading={loading} />
      <AlertModal
        status={AlertTypes.ERROR}
        title={"Error"}
        text={"There was an error fething the data!"}
        isOpen={error}
        setIsOpen={setError}
      />
    </div>
  );
}
