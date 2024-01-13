import { useEffect, useState } from "react";
import { callAPI, checkIfLogin } from "../utils/Functions";
import { useNavigate } from "react-router-dom";
import { HelpCircle, PieChart, User as UserIcon } from "react-feather";
import { GAMES, GameStats, STATUS_CODES, User } from "../utils/Types";
import AlertModal from "../components/modals/AlertModal";
import LoadingScreen from "../components/effects/LoadingScreen";
import HighScoreBlock from "../components/misc/HighscoreBlock";
import LinkButton from "../components/misc/LinkButton";
import EditModal from "../components/modals/EditModal";

export default function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();
  const [highscores, setHighscores] = useState<GameStats[]>([]);
  const [editModal, setEditModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  useEffect(() => {
    if (!editModal) {
      setLoading(true);
      checkIfLogin().then((user) => {
        if (!user) {
          navigate("/login");
          return navigate(0);
        }
        callAPI(`/games/${user._id}/highscores`, "POST", {
          userID: user._id,
          types: [
            GAMES.MAKINATOR_GUESS,
            GAMES.MAKINATOR_PI,
            GAMES.MAKINATOR_ONLINE,
          ],
        }).then((res) => {
          if (res.status !== STATUS_CODES.SUCCESS) return setErrorModal(true);
          setHighscores(res.highscores ?? []);
        });
        setUser(user);
        setLoading(false);
      });
    }
  }, [navigate, editModal]);
  const logout = () => {
    localStorage.clear();
    navigate("/");
    return navigate(0);
  };
  return (
    <div className="text-text bg-transparent w-full h-[calc(100%-80px)] my-auto flex">
      <div className="m-auto align-middle w-full justify-center flex flex-col ">
        <div className="flex flex-col lg:flex-row mx-auto gap-8 mt-24">
          {user?.avatar !== "" ? (
            <img
              src={user?.avatar}
              className="rounded-xl max-w-72 mx-auto my-auto"
            />
          ) : (
            <UserIcon size={250} className="m-auto justify-center" />
          )}
          <div className="flex flex-col my-auto align-middle text-center lg:text-left ">
            <p className="text-5xl 2xs:text-6xl sm:text-8xl font-bold ">
              {user?.username}
            </p>
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
        <hr className="w-1/2 lg:w-3/4 mx-auto border-background-800 my-3 border-2"></hr>
        <div className="flex flex-col lg:flex-col-reverse">
          <div className="flex gap-8 mx-auto flex-wrap justify-center lg: mb-6">
            <LinkButton text="Edit Profile" action={() => setEditModal(true)} />
            <LinkButton text="Logout" action={() => setLogoutModal(true)} />
          </div>
          <hr className="w-3/4 lg:w-1/2 mx-auto border-background-800 my-3 border-2"></hr>
          <div className="flex mx-auto gap-8 flex-wrap justify-center py-3 mb-8 lg:mb-0">
            <HighScoreBlock
              icon={<HelpCircle size={50} className="mx-auto text-secondary" />}
              highscore={highscores[0]?.game?.score ?? 0}
              name="Guess the Number"
              gamesPlayed={highscores[0]?.gamesPlayed ?? 0}
            />
            <HighScoreBlock
              icon={<PieChart size={50} className="mx-auto text-secondary" />}
              highscore={highscores[1]?.game?.score ?? 0}
              name="Digits of PI"
              gamesPlayed={highscores[1]?.gamesPlayed ?? 0}
            />
            {/* <HighScoreBlock
              icon={<Wifi size={50} className="mx-auto text-secondary" />}
              highscore={highscores[2]?.game?.score ?? 0}
              name="Online Play"
              gamesPlayed={highscores[2]?.gamesPlayed ?? 0}
            /> */}
          </div>
        </div>
      </div>
      <LoadingScreen loading={loading} />
      <EditModal setIsOpen={setEditModal} isOpen={editModal} />
      <AlertModal
        title={"Error"}
        text={"There was an error fething the data!"}
        isOpen={errorModal}
        setIsOpen={setErrorModal}
      />
      <AlertModal
        title={"Confirmation"}
        text={"Are you sure you want to logout?"}
        action={logout}
        cancel
        isOpen={logoutModal}
        setIsOpen={setLogoutModal}
      />
    </div>
  );
}
