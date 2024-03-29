import { createRef, useEffect, useState } from "react";
import pi from "/pi.txt";
import e from "/e.txt";
import {
  GAMES,
  IrrationalGuessProps,
  IrrationalGuessStatistics,
  NotARoombaEvents,
} from "../utils/Types";
import Transitions from "../components/effects/Transitions";
import AlertModal from "../components/modals/AlertModal";
import { AnimatePresence, motion } from "framer-motion";
import { callAPI, generateProblem, getCookie } from "../utils/Functions";
import LoadingScreen from "../components/effects/LoadingScreen";
import ResultsModal from "../components/modals/ResultsModal";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { socket } from "../../main";
// import { useNavigate } from "react-router-dom";

export default function IrrationalGuess({
  gameType,
  online,
  initialData,
}: IrrationalGuessProps) {
  //try to guess the digits of pi using mathmatical formulas as hints
  const [numberToGuess, setNumberToGuess] = useState<string[]>([]);
  const [currentGuesses, setCurrentGuesses] = useState<string[]>(["      "]);
  const [gameData, setGameData] = useState<IrrationalGuessStatistics>({
    score: 0,
    time: 0,
    lives: 3,
    digits: 0,
  });
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(0);
  const [errModal, setErrModal] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [highscore, setHighscore] = useState<IrrationalGuessStatistics>();
  const [loading, setLoading] = useState(false);
  const [equation, setEquation] = useState("");
  const [gameOverLoading, setGameOverLoading] = useState(false);
  const inputRef = createRef<HTMLInputElement>();
  const variants = {
    initial: ({ i, c }: { i: number; c: boolean }) => ({
      opacity: 0,
      scale: 0.2,
      transform: `rotate(${360 - (c ? 5 - i : i) * 8}deg) translate(${
        c ? "12" : "12"
      }px, ${(c ? 5 - i : i) * 8}px) rotate(-${360 - (c ? 5 - i : i) * 8}deg)`,
    }),
    animate: ({ i, c }: { i: number; c: boolean }) => ({
      opacity: 1,
      scale: 1,
      transform: `rotate(${360 - (c ? 5 - i : i) * 8}deg) translate(${
        c ? "-24" : "0"
      }px, ${(c ? 5 - i : i) * 8}px) rotate(-${360 - (c ? 5 - i : i) * 8}deg)`,
    }),
    exit: ({ i, c }: { i: number; c: boolean }) => ({
      opacity: 0,
      scale: 0,
      transform: `rotate(${(c ? 5 - i : i) * 8}deg) translate(${
        c ? "-64" : "-48"
      }px, ${(c ? 5 - i : i) * 8}px) rotate(-${(c ? 5 - i : i) * 8}deg)`,
    }),
  };

  const resetGame = () => {
    fetch(gameType === GAMES.MAKINATOR_PI ? pi : e)
      .then((r) => r.text())
      .then((text) => {
        const splitted = text.split(".");
        if (online && initialData) {
          // socket.emit(
          //   NotARoombaEvents.REGISTER_USER,
          //   getCookie("userID"),
          //   async (onlineGame: OnlineMakinatorGame) => {
          //     const userData = onlineGame.gameData[getCookie("userID") ?? ""];
          //     console.log("FETCHED DATA: " + userData.digits);
          //     setGameData(userData);
          //     // console.log("BEFORE: " +splitted);
          //     const dividedNumbers = splitted[1].slice(0, userData.digits);
          //     console.log(splitted);
          //     // console.log(dividedNumbers);
          //     setCurrentGuesses([...`    ${splitted[0]}.`.split(""), ...dividedNumbers.split("")]);
          //     setNumberToGuess(splitted[1].split(""));
          //   },
          // );
          const userData = initialData.gameData[getCookie("userID") ?? ""];
          setGameData(userData);
          const dividedNumbers = splitted[1].slice(0, userData.digits);
          setCurrentGuesses([
            ...`    ${splitted[0]}.`.split(""),
            ...dividedNumbers.split(""),
          ]);
          const restOfNumbers = splitted[1].slice(userData.digits).split("");
          setNumberToGuess(restOfNumbers);
          setEquation(
            generateProblem(
              parseInt(restOfNumbers[0]),
              currentGuesses.length - 6,
            ),
          );
          if (userData.lives == 0) setGameOverLoading(true);
        } else {
          setCurrentGuesses(`    ${splitted[0]}.`.split(""));
          setEquation(
            generateProblem(
              parseInt(splitted[1][0]),
              currentGuesses.length - 6,
            ),
          );
          setNumberToGuess(splitted[1].split(""));
        }
      });
    setGameData({ ...gameData, time: 0, lives: 3 });
    setGameOver(false);
    setGameOverModal(false);
    setInputValue("");
  };
  const onSubmit = () => {
    if (inputValue === "") setErrModal(true);
    else if (gameOver && !online) setGameOverModal(true);
    else if (inputValue != numberToGuess[0]) {
      setWrongGuess(true);
      setTimeout(() => setWrongGuess(false), 1000);
      if (gameData.lives - 1 < 0) setGameData({ ...gameData, lives: 0 });
      else setGameData({ ...gameData, lives: gameData.lives - 1 });
      if (gameData.lives - 1 <= 0) {
        setGameOver(true);
      }
    } else {
      inputRef.current?.focus();
      const digit = numberToGuess.shift();
      setNumberToGuess(numberToGuess);
      setInputValue("");
      setCurrentGuesses([...currentGuesses, digit ?? "0"]);
      setEquation(
        generateProblem(parseInt(numberToGuess[0]), currentGuesses.length - 6),
      );
    }
  };
  useEffect(() => {
    resetGame();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const inputNumber = (input: React.FormEvent<HTMLInputElement>) => {
    if (
      !Number.isNaN(
        input.currentTarget.value || input.currentTarget.value == "0",
      )
    ) {
      const converted = parseInt(input.currentTarget.value);
      // can be exploited
      // if (input.currentTarget.value == numberToGuess[0]) {
      //   const digit = numberToGuess.shift();
      //   setNumberToGuess(numberToGuess);
      //   setInputValue("");
      //   setCurrentGuesses([...currentGuesses, digit ?? "0"]);
      //   return setEquation(generateProblem(parseInt(numberToGuess[0]),currentGuesses.length-6))
      // }
      setInputValue(converted.toString() == "NaN" ? "" : converted.toString());
    }
  };
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (gameOver) {
      document.documentElement.style.overflowY = "hidden";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver]);
  const calculateScore = () => {
    return 200 * (currentGuesses.length - 6) * 3 ** gameData.lives;
  };
  useEffect(() => {
    setGameData({
      ...gameData,
      digits: currentGuesses.length - 6,
      time,
      score: calculateScore(),
    });
  }, [currentGuesses]);
  useEffect(() => {
    if (online)
      socket.emit(NotARoombaEvents.UPDATE_GAME_DATA, getCookie("userID"), {
        ...gameData,
        time,
      });
  }, [gameData]);
  useEffect(() => {
    //save to localstoer array or online if have acc
    if (gameOver && !online) {
      const userID = localStorage.getItem("userID");
      if (userID) {
        setLoading(true);
        callAPI("/games/update", "POST", {
          userID,
          type: gameType,
          game: {
            time: gameData.time,
            digits: currentGuesses.length - 6,
            lives: gameData.lives,
            score: calculateScore(),
          },
        }).then(() => {
          callAPI(
            `/users/${userID}/highscore?gameType=${gameType}`,
            "GET",
          ).then((res) => {
            setHighscore(res.highscore);
            setLoading(false);
            setGameOverModal(true);
          });
        });
      } else {
        const prevGames = JSON.parse(
          localStorage.getItem(
            gameType === GAMES.MAKINATOR_PI ? "piStatistics" : "eStatistics",
          ) ?? "[]",
        );
        if (prevGames == null) {
          localStorage.setItem(
            gameType === GAMES.MAKINATOR_PI ? "piStatistics" : "eStatistics",
            JSON.stringify([
              {
                time: gameData.time,
                digits: currentGuesses.length - 6,
                lives: gameData.lives,
                score: calculateScore(),
              } as IrrationalGuessStatistics,
            ]),
          );
        } else {
          localStorage.setItem(
            gameType === GAMES.MAKINATOR_PI ? "piStatistics" : "eStatistics",
            JSON.stringify([
              ...prevGames,
              {
                time: gameData.time,
                digits: currentGuesses.length - 6,
                lives: gameData.lives,
                score: calculateScore(),
              } as IrrationalGuessStatistics,
            ]),
          );
        }
        setGameOverModal(true);
      }
    } else if (online && gameOver) {
      console.log("END GAME");
      setGameOverLoading(true);
      // socket.emit(NotARoombaEvents.END_GAME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver]);
  return (
    <AnimatePresence>
      <Transitions>
        <div
          className={
            "bg-transparent text-text my-auto flex overflow-hidden" +
            (!online ? "h-[calc(100vh-80px)]" : "h-[calc(50vh-40px)]")
          }
        >
          <div className="m-auto align-middle justify-center mt-20">
            <div className="mx-auto justify-center w-full align-middle text-center">
              <p className="text-4xl mt-4 mb-0 font-semibold">
                Digits of {gameType === GAMES.MAKINATOR_PI ? "π" : "e"}
              </p>
              <p className="text-xl">
                Guess 1 million digits of{" "}
                {gameType === GAMES.MAKINATOR_PI ? "π" : "e"} using equations!
              </p>
              <div className="flex">
                <div className="w-1/3 mx-auto">
                  <p className="font-bold text-5xl lg:text-7xl text-secondary text-center">
                    {gameData.lives}
                  </p>
                  <p className=" text-lg lg:text-xl text-wrap w-24 flex mx-auto text-center">
                    Lives Remaining
                  </p>
                </div>
                {!online ? (
                  <p className="font-bold text-3xl xs:text-4xl w-1/3 text-secondary ">
                    {new Date(time * 1000).toISOString().slice(11, 19)}
                  </p>
                ) : (
                  <p className="font-bold text-3xl xs:text-4xl w-1/3 text-secondary">
                    {" "}
                    1v1
                  </p>
                )}
                <div className="w-1/3">
                  <p className="font-bold text-5xl lg:text-7xl text-secondary">
                    {currentGuesses.length - 6}
                  </p>
                  <p className=" text-lg lg:text-xl">Digits</p>
                </div>
              </div>
            </div>
            <div className="flex my-4 mx-auto justify-center w-screen text-center sm:-mt-6 md:-mt-14">
              <div className="flex w-fit translate-x-6">
                {currentGuesses.slice(0, -6).map((v, i) => (
                  <p
                    key={i}
                    className={
                      "text-4xl lg:text-6xl m-0 translate-y-12 animate-animatedPI h-0 w-0"
                    }
                    onAnimationEnd={(e) =>
                      (e.currentTarget.style.display = "hidden")
                    }
                  >
                    {v}
                  </p>
                ))}
                <div className="flex">
                  {currentGuesses.slice(-6).map((v, i) => (
                    <motion.p
                      custom={{ i, c: true }}
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 1, delay: i * 0.05 }}
                      key={v + i}
                      className="text-4xl lg:text-6xl mx-1 w-6 lg:w-12 "
                    >
                      {v}
                    </motion.p>
                  ))}
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
                className="w-fit"
              >
                <input
                  ref={inputRef}
                  type="tel"
                  value={inputValue}
                  onChange={inputNumber}
                  className={
                    "bg-transparent text-center w-14 lg:w-28 text-4xl lg:text-6xl outline rounded-xl outline-secondary" +
                    (wrongGuess ? " animate-shake" : "")
                  }
                  maxLength={1}
                />
              </form>
              <div className="flex w-fit">
                {numberToGuess.slice(0, 6).map((v, i) => (
                  <motion.p
                    custom={{ i, c: false }}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1, delay: i * 0.05 + 0.3 }}
                    key={v + i}
                    className=" text-4xl lg:text-6xl mx-1 w-6 lg:w-12 "
                  >
                    ?
                  </motion.p>
                ))}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSubmit();
              }}
              className=" bg-primary text-center flex  mx-auto my-4 w-32 xs:w-48 min-w-max rounded-xl py-2 justify-center  text-text hover:bg-accent hover:shadow-md transition-all duration-300 font-semibold "
            >
              Submit
            </button>
            <div className="flex text-4xl mx-auto text-center w-fit animate-show">
              <MathJaxContext
                config={{ loader: { load: ["input/asciimath"] } }}
              >
                <MathJax className="animate-show" key={equation}>
                  `{equation}`
                </MathJax>
              </MathJaxContext>
            </div>
          </div>
          <LoadingScreen loading={loading} />
          <ResultsModal
            game={gameType}
            statistics={{
              time: gameData.time,
              digits: currentGuesses.length - 6,
              lives: gameData.lives,
              score: calculateScore(),
            }}
            highscore={
              highscore ??
              (
                JSON.parse(
                  localStorage.getItem(
                    gameType === GAMES.MAKINATOR_PI
                      ? "piStatistics"
                      : "eStatistics",
                  ) ?? "[]",
                ) as IrrationalGuessStatistics[]
              ).sort(
                (a: IrrationalGuessStatistics, b: IrrationalGuessStatistics) =>
                  b.score - a.score,
              )[0] ?? {
                time: gameData.time,
                digits: currentGuesses.length - 6,
                lives: gameData.lives,
                score: calculateScore(),
              }
            }
            isOpen={gameOverModal && !loading}
            resetGame={resetGame}
            setIsOpen={setGameOverModal}
          />
          <AlertModal
            title={"Error"}
            text={"Enter a number!"}
            isOpen={errModal}
            setIsOpen={setErrModal}
          />
          <LoadingScreen
            loading={gameOverLoading}
            text="Waiting for opponent to finish!"
          />
        </div>
      </Transitions>
    </AnimatePresence>
  );
}
