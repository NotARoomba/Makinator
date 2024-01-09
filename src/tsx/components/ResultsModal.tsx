import Modal from "react-modal";

import { ResultsModalProps } from "../utils/Types";
import { useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function ResultsModal({
  statistics,
  highscore,
  isOpen,
}: ResultsModalProps) {
  const navigate = useNavigate();
  const colors = [
    "text-text",
    "text-[#7499fd]",
    "text-[#D7263D]",
    "text-[#1B998B]",
  ];
  return (
    <Modal
      isOpen={isOpen}
      className={
        " w-2/6 rounded-xl h-2/3 min-h-80 min-w-80 bg-accent text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      overlayClassName={
        "bg-text-800/80 absolute w-screen h-screen top-0 left-0 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      closeTimeoutMS={300}
    >
      <div className="w-full h-full flex flex-col text-center">
        {/* <div className="flex mx-auto">
          {[..."Game Over"].map((v, i) => (
            <p
              key={i}
              className={
                "text-6xl font-bold mt-2 " +
                colors[Math.floor(Math.random() * colors.length)]
              }
            >
              {v}
            </p>
          ))}
        </div> */}
        <p className="text-6xl font-bold mt-2 text-[#1B998B]">Game Over</p>
        <p className="text-2xl ">
          You {statistics.lives == 0 ? "did not" : "did"} guess the number!
        </p>
        <div className="flex text-center justify-center text-lg my-2">
          <div className="w-1/3 font-bold">
            <p className=" text-xl ">High Score</p>
            <p>{new Date(highscore.time * 1000).toISOString().slice(11, 19)}</p>
            <p>{highscore.score}</p>
            <p>{highscore.lives}</p>
            <p>{highscore.guesses}</p>
          </div>
          <div className="w-1/6 font-bold text-secondary-300">
            <p className=" text-xl text-text text-center ">────────</p>
            <p>Time</p>
            <p>Score</p>
            <p>Lives</p>
            <p>Guesses</p>
          </div>
          <div className="w-1/3 font-semibold ">
            <p className=" text-xl font-bold">Your Score</p>
            <p>
              {new Date(statistics.time * 1000).toISOString().slice(11, 19)}
            </p>
            <p>{statistics.score}</p>
            <p>{statistics.lives}</p>
            <p>{statistics.guesses}</p>
          </div>
        </div>
        <div className="flex text-xl font-bold justify-center text-center px-10 mx-auto flex-col">
          <p>Login or sign up to view your score on the global leaderboard!</p>
          <div className="flex justify-center">
            <LinkButton text="Login" route="/login" />
            <LinkButton text="Sign up" route="/signup" />
          </div>
        </div>
        <div className="flex">
          <LinkButton text="Home" route="/" />
          <LinkButton text="Play Again" action={() => navigate(0)} />
        </div>
      </div>
    </Modal>
  );
}
