import { useEffect, useState } from "react";
import raw from "/pi.txt";
import { GuessStatistics } from "../utils/Types";
import Transitions from "../components/Transitions";

export default function PI() {
  //try to guess the digits of pi using mathmatical formulas as hints
  const [PI, setPI] = useState("");
  const [currentPI, setCurrentPI] = useState("");
  const [lives, setLives] = useState(3);
  const [inputValue, setInputValue] = useState("");
  const [errModal, setErrModal] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [highscore, setHighscore] = useState<GuessStatistics>();
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);
  const resetGame = () => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setPI(text);
      });
    setTime(0);
    setGameOver(false);
    setGameOverModal(false);
    setInputValue("");
    setLives(3);
  };
  useEffect(() => {
    resetGame();
  }, []);

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
          <div className="flex">
            {
                currentPI.split("").slice(0, -6).map((v, i) => <p key={i}>{v}</p>)
            }
          </div>
        </div>
      </div>
    </Transitions>
  );
}
