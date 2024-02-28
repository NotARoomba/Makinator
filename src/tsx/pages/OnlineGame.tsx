import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../utils/Functions";
import { GAMES, NotARoombaEvents } from "../utils/Types";
import AlertModal from "../components/modals/AlertModal";
import Transitions from "../components/effects/Transitions";
import LoadingScreen from "../components/effects/LoadingScreen";
import { OnlineMakinatorGame } from "../../../../NotARoomba-Backend/models/online";
import IrrationalGuess from "./IrrationalGuess";
import { socket } from "../../main";
import LinkButton from "../components/misc/LinkButton";

export default function OnlineGame() {
  // need to check if the game is valid and if not then post an error ahd durect back to online menu, if it is valid then check if 2 users are already in game and if so then send to main menu and then later check if the user isnt the same and then if not then add the user to the gameData and start the game,
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [game, setGame] = useState<OnlineMakinatorGame | null>();
  const { gameID } = useParams();
  const updateFunction = async (onlineGame: OnlineMakinatorGame | null) => {
    if (!onlineGame) {
      setLoading(false);
      setAlert(true);
    } else if (!onlineGame.winner) {
      setLoading(false);
      if (Object.keys(onlineGame.gameData).length > 1)
        socket.emit(NotARoombaEvents.UPDATE_GAME_STATE);
      setGame(onlineGame);
    } else {
      setGame(onlineGame);
      setGameOver(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    // socket.open();
    setLoading(true);
    socket.emit(
      NotARoombaEvents.REGISTER_USER,
      getCookie("userID"),
      gameID,
      updateFunction,
    );
  }, []);
  useEffect(() => {
    if (game && Object.keys(game.gameData).length == 2 && !started)
      setStarted(true);
    else if (game && game.winner) setGameOver(true);
    // else if (game && Object.keys(game.gameData).length == 2) socket.emit(NotARoombaEvents.UPDATE_GAME_DATA, game.gameData[getCookie("userID") ?? ""])
  }, [game]);
  const updateGame = async () => {
    // setStarted(true);
    setLoading(true);
    socket.emit(
      NotARoombaEvents.REQUEST_GAME_DATA,
      async (onlineGame: OnlineMakinatorGame | null) => {
        setLoading(false);
        if (!onlineGame) {
          setAlert(true);
        } else setGame(onlineGame);
      },
    );
  };
  socket.on(NotARoombaEvents.UPDATE_GAME_STATE, updateGame);
  socket.on(NotARoombaEvents.END_GAME, updateGame);
  return (
    <Transitions>
      <div className="bg-transparent text-text h-full flex ">
        <div className="justify-center w-full align-middle m-auto z-10 ">
          {!started || !game ? (
            <LoadingScreen
              loading={!started || loading}
              text={
                (!loading && !started
                  ? `${
                      Object.keys(game?.gameData ?? { a: "a" }).length
                    }/2 Players!`
                  : `Loading Game...`) + `\nGame Code: ${gameID}`
              }
              children={
                <LinkButton
                  text="Cancel"
                  action={() => {
                    socket.disconnect();
                    navigate("/play/online");
                  }}
                />
              }
            />
          ) : !gameOver ? (
            <>
              <IrrationalGuess
                gameType={game.gameType ?? GAMES.MAKINATOR_PI}
                online
                initialData={game}
              />
              <div className="bg-transparent text-text flex overflow-hidden h-1/2 lg:w-1/2 mx-auto">
                <div className="mx-auto justify-center mt-12 w-full">
                  <p className="text-4xl mt-4 mb-0 font-semibold text-center">
                    Opponent
                  </p>
                  <div className="flex flex-row w-full justify-around">
                    <div className="w-1/2 mx-auto">
                      <p className="font-bold text-5xl lg:text-7xl text-secondary text-center">
                        {
                          game.gameData[
                            Object.keys(game.gameData).filter(
                              (v) => v !== getCookie("userID"),
                            )[0]
                          ].lives
                        }
                      </p>
                      <p className=" text-lg lg:text-xl w-24 mx-auto text-wrap text-center">
                        Lives Remaining
                      </p>
                    </div>
                    <div className="w-1/2 mx-auto">
                      <p className="font-bold text-5xl mx-auto lg:text-7xl text-secondary text-center ">
                        {
                          game.gameData[
                            Object.keys(game.gameData).filter(
                              (v) => v !== getCookie("userID"),
                            )[0]
                          ].digits
                        }
                      </p>
                      <p className=" text-lg lg:text-xl w-24 mx-auto text-wrap text-center">
                        Digits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Transitions>
              <div
                className={
                  "bg-transparent text-text my-auto flex overflow-hidden h-[calc(100vh-80px)] w-full"
                }
              >
                <div className="m-auto align-middle justify-center mt-20 w-full">
                  <p className="text-4xl font-semibold text-center my-4 ">
                    Game {game.gameID}
                  </p>
                  <div className="flex text-center justify-center text-lg my-2 w-full">
                    <div className="w-1/3 font-bold text-xl lg:text-2xl">
                      <p className="text-xl lg:text-4xl ">
                        {game.usernames[0]}
                      </p>
                      <p>
                        {new Date(Object.values(game.gameData)[0].time * 1000)
                          .toISOString()
                          .slice(11, 19)}
                      </p>
                      <p>{Object.values(game.gameData)[0].score}</p>
                      <p>{Object.values(game.gameData)[0].lives}</p>
                      <p>{Object.values(game.gameData)[0].digits}</p>
                    </div>
                    <div className="w-1/6 font-bold text-secondary-300 text-xl lg:text-2xl">
                      <p className="text-2xl text-text text-center ">_</p>
                      {/* <hr className="my-6 mb-4"></hr> */}
                      <p>Time</p>
                      <p>Score</p>
                      <p>Lives</p>
                      <p>Digits</p>
                    </div>
                    <div className="w-1/3 font-semibold text-xl lg:text-2xl ">
                      <p className=" text-xl lg:text-4xl font-bold ">
                        {game.usernames[1]}
                      </p>
                      <p>
                        {new Date(Object.values(game.gameData)[1].time * 1000)
                          .toISOString()
                          .slice(11, 19)}
                      </p>
                      <p>{Object.values(game.gameData)[1].score}</p>
                      <p>{Object.values(game.gameData)[1].lives}</p>
                      <p>{Object.values(game.gameData)[1].digits}</p>
                    </div>
                  </div>
                  <p className="mx-auto text-center text-secondary-200 text-3xl  lg:text-5xl font-bold">
                    {
                      game.usernames[
                        Object.keys(game.gameData).indexOf(game.winner ?? "")
                      ]
                    }{" "}
                    Won!
                  </p>
                </div>
              </div>
            </Transitions>
          )}
          <AlertModal
            title="Error"
            text="This game is unavailable to join!"
            action={() => navigate("/play/online")}
            isOpen={alert}
            setIsOpen={setAlert}
          />
        </div>

        {/* <LoadingScreen loading={loading} /> */}
      </div>
    </Transitions>
  );
}
