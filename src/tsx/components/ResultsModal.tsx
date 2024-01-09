import Modal from "react-modal";

import { ResultsModalProps } from "../utils/Types";
import { Link, useNavigate } from "react-router-dom";

export default function ResultsModal({
  statistics,
  highscore,
  isOpen,
}: ResultsModalProps) {
const navigate = useNavigate()
  return (
    <Modal
      isOpen={isOpen}
      className={
        " w-2/6 rounded-xl h-2/3 min-h-80 min-w-80 bg-background text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      overlayClassName={
        "bg-text-800/80 absolute w-screen h-screen top-0 left-0 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      closeTimeoutMS={300}
    >
      <div className="w-full h-full flex flex-col text-center">
        <p className="text-6xl font-bold mt-2">Game Over</p>
        <p className="text-2xl ">You {statistics.lives == 0 ? 'did not': 'did'} guess the number!</p>
        <div className="flex text-center justify-center">
            <div className="w-1/3">
                <p className=" text-xl font-bold">High Score</p>
            </div>
            <div className="w-1/6">

            </div>
            <div className="w-1/3 ">
            <p className=" text-xl font-bold">Your Score</p>

            </div>
        </div>
        <div className="flex">
            <Link
            to="/"
            className="px-4 w-36 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-2xl py-2 mx-auto"
            >
            Home
            </Link>
            <button
            onClick={() => navigate(0)}
            className="px-4 w-36 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-2xl py-2 mx-auto"
            >
            Play Again
            </button>

        </div>
      </div>
    </Modal>
  );
}
