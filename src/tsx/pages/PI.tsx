import { useEffect, useState } from "react";
import raw from "/pi.txt";
import { GuessStatistics } from "../utils/Types";
import Transitions from "../components/Transitions";
import AlertModal from "../components/AlertModal";
import { AnimatePresence, motion } from "framer-motion";
import { generateProblem } from "../utils/Functions";

export default function PI() {
  //try to guess the digits of pi using mathmatical formulas as hints
  const [PI, setPI] = useState<string[]>([]);
  const [currentPI, setCurrentPI] = useState<string[]>("    3.".split(""));
  const [lives, setLives] = useState(3);
  const [inputValue, setInputValue] = useState("");
  const [errModal, setErrModal] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [highscore, setHighscore] = useState<GuessStatistics>();
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);
  const variants = {
    initial: ({ i, c }: { i: number; c: boolean }) => ({
      opacity: 0,
      scale: 0.2,
      transform: `rotate(${360 - (c ? (c ? 5 - i : i) : i) * 8}deg) translate(${
        c ? "12" : "24"
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
        c ? "-64" : "0"
      }px, ${(c ? 5 - i : i) * 8}px) rotate(-${(c ? 5 - i : i) * 8}deg)`,
    }),
  };

  const resetGame = () => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setPI(text.split(""));
      });
    setTime(0);
    setGameOver(false);
    setGameOverModal(false);
    setInputValue("");
    setLives(3);
  };
  const onSubmit = () => {
    console.log(generateProblem(parseInt(PI[0]), 20));
    if (inputValue === "") setErrModal(true);
    else if (gameOver) setGameOverModal(true);
    else if (inputValue != PI[0]) {
      setWrongGuess(true);
      setTimeout(() => setWrongGuess(false), 1000);
      if (lives - 1 < 0) setLives(0);
      else setLives(lives - 1);
      if (lives - 1 <= 0) {
        setGameOver(true);
      }
    } else {
      const digit = PI.shift();
      setPI(PI);
      setInputValue("");
      setCurrentPI([...currentPI, digit ?? "0"]);
    }
  };
  useEffect(() => {
    resetGame();
  }, []);
  const inputNumber = (input: React.FormEvent<HTMLInputElement>) => {
    if (
      !Number.isNaN(
        input.currentTarget.value || input.currentTarget.value === "0",
      )
    ) {
      const converted = parseInt(input.currentTarget.value);
      setInputValue(!converted ? "" : converted.toString());
    }
  };
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => setTime(time + 1), 1000);
      return () => clearInterval(interval);
    } else {
      document.documentElement.style.overflowY = "hidden";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, gameOver]);

  return (
    <AnimatePresence>
      <Transitions>
        <div className="bg-transparent text-text h-[calc(100%-80px)] my-auto flex">
          <div className="m-auto align-middle justify-center mt-20">
            <div className="mx-auto justify-center w-full align-middle text-center">
              <p className="text-4xl mt-4 mb-0 font-semibold">Digits of PI</p>
              <p className="text-xl">
                Guess 1 million digits of PI using equations!
              </p>
              <p className="font-bold text-4xl text-secondary ">
                {new Date(time * 1000).toISOString().slice(11, 19)}
              </p>
            </div>
            <div className="flex my-4 mx-auto justify-center w-screen text-center">
              <div className="w-1/3 mx-auto">
                <p className="font-bold text-7xl text-secondary text-center">
                  {lives}
                </p>
                <p className="text-xl text-center">Lives Remaining</p>
              </div>
              <div className="flex justify-between">
                {currentPI.slice(0, -6).map((v, i) => (
                  <p
                    key={i}
                    className={
                      "text-6xl m-0 translate-y-12 animate-animatedPI h-0 w-0"
                    }
                    onAnimationEnd={(e) =>
                      (e.currentTarget.style.display = "hidden")
                    }
                  >
                    {v}
                  </p>
                ))}
                {currentPI.slice(-6).map((v, i) => (
                  <motion.p
                    custom={{ i, c: true }}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1, delay: i * 0.01 }}
                    key={v + i}
                    className="text-6xl mx-1 w-12 "
                  >
                    {v}
                  </motion.p>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <input
                  type="tel"
                  value={inputValue}
                  onChange={inputNumber}
                  className={
                    "bg-transparent text-center w-28 text-6xl outline rounded-xl outline-secondary" +
                    (wrongGuess ? " animate-shake" : "")
                  }
                  maxLength={1}
                />
              </form>
              <div className="flex justify-between">
                {PI.slice(0, 6).map((v, i) => (
                  <motion.p
                    custom={{ i, c: false }}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1, delay: i * 0.05 + 0.1 }}
                    key={v + i}
                    className="text-6xl mx-1 w-12 "
                  >
                    ?
                  </motion.p>
                ))}
              </div>
              <div className="w-1/3">
                <p className="font-bold text-7xl text-secondary">
                  {currentPI.length - 6}
                </p>
                <p className="text-xl">Digits</p>
              </div>
            </div>
          </div>
          <AlertModal
            title={"Error"}
            text={"Enter a number!"}
            isOpen={errModal}
            setIsOpen={setErrModal}
          />
        </div>
      </Transitions>
    </AnimatePresence>
  );
}
