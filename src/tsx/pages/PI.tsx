import { useEffect, useState } from "react";
import raw from "/pi.txt";
import { GuessStatistics } from "../utils/Types";
import Transitions from "../components/Transitions";
import AlertModal from "../components/AlertModal";
import { motion } from "framer-motion"

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
    console.log(inputValue, PI[0])
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
      const digit = PI.shift()
      setPI(PI)
      setInputValue("")
      setCurrentPI([...currentPI, digit ?? "0"])
    }
  };
  useEffect(() => {
    resetGame();
  }, []);
  const inputNumber = (input: React.FormEvent<HTMLInputElement>) => {
    if (!Number.isNaN(input.currentTarget.value)) {
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
              <div className="flex justify-between">
                
            {
                currentPI.slice(-6).map((v, i) => <p key={i} className="text-6xl mx-1 w-12" style={{transform: `rotate(${(5-i)*8}deg) translateY(${(5-i)*8}px) rotate(-${(5-i)*8}deg)`}}>{v}</p>)
            }
            </div>
            <form onSubmit={(e) => {e.preventDefault();onSubmit()}}>
            <input
                type="tel"
                value={inputValue}
                onChange={inputNumber}
                className={
                  "bg-transparent text-center w-28 text-6xl outline rounded-xl outline-secondary" +
                  (wrongGuess ? " animate-shake" : "")
                }
                maxLength={1}
              /></form>
              <div className="flex justify-between">
              {
                PI.slice(0, 6).map((v, i) => <p key={i} className="text-6xl mx-1 w-12" style={{transform: `rotate(${(i)*8}deg) translateY(${(i)*8}px) rotate(-${(i)*8}deg)`}}>{v}</p>)
              }</div>
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
  );
}
