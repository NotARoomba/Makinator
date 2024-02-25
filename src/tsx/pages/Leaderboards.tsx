import { useEffect, useState } from "react";
import Transitions from "../components/effects/Transitions";
import { GAMES, HighScore, STATUS_CODES } from "../utils/Types";
import { callAPI } from "../utils/Functions";
import AlertModal from "../components/modals/AlertModal";
import LoadingScreen from "../components/effects/LoadingScreen";
import LinkButton from "../components/misc/LinkButton";
import { User } from "react-feather";

export default function Leaderboards() {
  const [loading, setLoading] = useState(false);
  const [gameType, setGameType] = useState<GAMES>(GAMES.MAKINATOR_GUESS);
  const [highscores, setHighscores] = useState<HighScore[]>();
  const [alertModal, setAlertModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState<string[]>(["", ""]);
  const setAlert = (msg: string, title?: string) => {
    title ? setAlertMsg([title, msg]) : setAlertMsg(["Error", msg]);
    setAlertModal(true);
  };
  useEffect(() => {
    setLoading(true);
    console.log(gameType);
    callAPI(`/games/${gameType}/highscores`, "GET").then((res) => {
      if (res.status !== STATUS_CODES.SUCCESS) {
        setLoading(false);
        return setAlert("There was an error fetching the highscores!");
      }
      setHighscores(res.highscores);
      setLoading(false);
    });
  }, [gameType]);
  return (
    <Transitions>
      <div className="bg-transparent text-text text-center h-[calc(100%-80px)] w-full flex">
        <div className="m-auto justify-center h-full w-full align-middle text-center pt-20">
          <p className="text-4xl my-4 mb-0 font-semibold">Leaderboards</p>
          <div className="flex justify-center gap-8 mb-4">
            {[
              { "Guess the Number": GAMES.MAKINATOR_GUESS },
              { "Digits of π": GAMES.MAKINATOR_PI },
              { "Digits of e": GAMES.MAKINATOR_E },
              // { "Online Play": GAMES.MAKINATOR_ONLINE },
            ].map((v, i) => (
              <LinkButton
                key={i}
                text={Object.keys(v)[0]}
                action={() => setGameType(Object.values(v)[0])}
                selected={gameType === Object.values(v)[0]}
              />
            ))}
          </div>
          <table className="justify-around m-auto w-[85vw] table-fixed bg-background/70 ">
            <thead>
              <tr className="py-8 text-xl md:text-2xl">
                <th className="text-red">Rank</th>
                <th className="text-green">Score</th>
                <th className="text-secondary">User</th>
              </tr>
            </thead>
            <tbody>
              {highscores?.length !== 0 ? (
                highscores?.map((score, i) => {
                  return (
                    <tr
                      key={i}
                      className={
                        "py-8 text-center break-words text-lg font-bold " +
                        (i == 0
                          ? " text-[#c9b037]"
                          : i == 1
                            ? " text-[#b4b4b4]"
                            : i == 2
                              ? " text-[#77502a]"
                              : " text-text")
                      }
                    >
                      <td className="py-2">{i + 1}</td>
                      <td>{score.score}</td>
                      <td className="sm:flex my-auto align-middle text-center justify-center">
                        {" "}
                        {score.avatar !== "" ? (
                          <img
                            src={score.avatar}
                            className="rounded-xl max-w-12 my-auto mx-auto sm:mx-0"
                          />
                        ) : (
                          <User
                            size={48}
                            color="#ffffff"
                            className="mx-auto sm:mx-0 justify-center"
                          />
                        )}
                        <p className="align-middle my-auto mx-auto sm:mx-2 min-w-fit text-center">
                          {score.username}
                        </p>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="py-8 text-center break-words text-lg font-bold">
                  <td>No Data</td>
                  <td>No Data</td>
                  <td>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <LoadingScreen loading={loading} />
        <AlertModal
          title={alertMsg[0]}
          text={alertMsg[1]}
          isOpen={alertModal}
          setIsOpen={setAlertModal}
        />
      </div>
    </Transitions>
  );
}
