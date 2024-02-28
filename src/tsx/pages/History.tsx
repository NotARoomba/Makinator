import { useEffect, useState } from "react";
import { OnlineMakinatorGame } from "../../../../NotARoomba-Backend/models/online";
import { useNavigate } from "react-router-dom";
import { callAPI, checkIfLogin } from "../utils/Functions";
import LoadingScreen from "../components/effects/LoadingScreen";
import { STATUS_CODES } from "../utils/Types";
import AlertModal from "../components/modals/AlertModal";
import LinkButton from "../components/misc/LinkButton";

export default function History() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [games, setGames] = useState<OnlineMakinatorGame[]>([]);
  useEffect(() => {
    setLoading(true);
    checkIfLogin().then(async (user) => {
      if (!user) {
        navigate("/login");
        return navigate(0);
      }
      callAPI(`/games/online/${user._id}`, "GET").then((res) => {
        setLoading(false);
        if (res.status !== STATUS_CODES.SUCCESS) return setErrorModal(true);
        setGames(res.games);
      });
    });
  }, []);
  return (
    <div
      className={"bg-transparent text-text my-auto flex h-[calc(100vh-80px)]"}
    >
      <div className="m-auto align-middle justify-center mt-20">
        <p className="text-4xl font-semibold text-center my-4">Game History</p>
        <div className="mx-auto justify-center flex flex-wrap gap-8">
          <LinkButton route="/" text="Home" />
          <LinkButton route="/play" text="Play" />
          <LinkButton route="/profile" text="Profile" />
        </div>
        <div className="flex flex-col gap-6 mx-auto mt-6 mb-12">
          {games.length !== 0 ? (
            games.map((game, i) => (
              <div
                key={i}
                onClick={() => navigate(`/play/online/${game.gameID}`)}
                className="flex flex-col w-3/4 bg-secondary-300/50 p-4 rounded-xl mx-auto text-center cursor-pointer hover:drop-shadow hover:shadow-md hover:shadow-primary-200 transition-all duration-300 hover:-translate-y-2"
              >
                <p className="font-bold text-2xl">GameID: {game.gameID}</p>
                <p className="text-2xl text-accent-200">
                  {game.usernames[0]} vs. {game.usernames[1]}
                </p>
                <p className="text-xl font-bold">
                  {
                    game.usernames[
                      Object.keys(game.gameData).indexOf(game.winner ?? "")
                    ]
                  }{" "}
                  Won!
                </p>
                <p>
                  {(() => {
                    const d = new Date(game.date);
                    return (
                      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join(
                        "/",
                      ) +
                      " " +
                      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":")
                    );
                  })()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-2xl font-semibold text-center my-4 mx-auto">
              You haven't played any online games!
            </p>
          )}
        </div>
      </div>
      <AlertModal
        title={"Error"}
        text={"There was an error fething the data!"}
        isOpen={errorModal}
        setIsOpen={setErrorModal}
      />
      <LoadingScreen loading={loading} />
    </div>
  );
}
