import { useEffect, useState } from "react";
import AlertModal from "../components/AlertModal";
import { AlertTypes, GuessList, GuessStatistics, GuessTypes } from "../utils/Types";
import GuessBar from "../components/GuessBar";
import { getFactors, isPrime } from "../utils/Functions";
import ResultsModal from "../components/ResultsModal";

export default function Guess() {
  // robot thinks of a number and the user tries to guess it using clues
  const [number, setNumber] = useState(0);
  const [lives, setLives] = useState(3);
  const [guesses, setGuesses] = useState<GuessList[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [errModal, setErrModal] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuesses([])
    setLives(3);
  }, []);
  const inputNumber = (input: React.FormEvent<HTMLInputElement>) => {
    if (!Number.isNaN(input.currentTarget.value)) {
      const converted = parseInt(input.currentTarget.value);
      setInputValue(!converted ? "" : converted.toString());
    }
  };
  const addGuess = (type: GuessTypes, input: string) => {
    console.log(type, input, number);
    let guess: string = type.split("the number")[1].replace("?", "");
    if (type == GuessTypes.ISEVEN) {
      guess = `The number is ${number % 2 == 0 ? "" : "not"} ${guess}`;
      setGuesses([...guesses, { guessType: type, guessString: guess }]);
    } else if (type == GuessTypes.ISPRIME) {
      guess = `The number is ${isPrime(number) ? "" : "not"} ${guess}`;
      setGuesses([...guesses, { guessType: type, guessString: guess }]);
    } else if (input == "") {
      setErrModal(true);
    } else {
      const inputNumber = parseInt(input);
      if (type == GuessTypes.DIVISIBLE || GuessTypes.MULTIPLE)
        guess = `The number is ${
          number % inputNumber == 0 ? "" : "not"
        } ${guess.replace("x", input)}`;
      else if (type == GuessTypes.FACTORS)
        guess = `The number is ${
          getFactors(number) == inputNumber ? "" : "not"
        } ${guess.replace("x", input)}`;
      else
        guess = `The number is ${
          (number < inputNumber && type == GuessTypes.LESSTHAN) ||
          (number > inputNumber && type == GuessTypes.GREATERTHAN)
            ? ""
            : "not"
        } ${guess.replace("x", input)}`;
      setGuesses([...guesses, { guessType: type, guessString: guess }]);
    }
  };
  const onSubmit = () => {
    if (inputValue === "") setErrModal(true);
    else if (parseInt(inputValue) != number) {
      setWrongGuess(true)
      setTimeout(() => setWrongGuess(false), 1000)
      setLives(lives-1)
    }
  };
  const calculateScore = () => {
    return (time*10) + (guesses.length*100) * (lives * 1000)
  }
  useEffect(() => {
    const interval = setInterval(() => setTime(time+1), 1000)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])
  useEffect(() => {
    if (lives == 0) {
      //save to localstoer array or online if have acc
      const prevGames = localStorage.getItem("guessStatistics");
      if (prevGames == null) {
        localStorage.setItem("guessStatistics", JSON.stringify([{time, guesses: guesses.length, lives} as GuessStatistics]))
      } else {
        localStorage.setItem("guessStatistics", JSON.stringify([...prevGames, {time, guesses: guesses.length, lives} as GuessStatistics]))
      }
      setGameOver(true)
    }
  }, [lives])
  // there will be options such as is number divisible by x or is number multiple of x or is even or is it a prime number or if number has exactly x factors
  return (
    <div className="bg-background text-text min-h-[calc(100vh-80px)] my-auto flex flex-col">
      <div className="mx-auto justify-center w-full align-middle text-center">
        <p className="text-4xl mb-0 font-semibold">Guess the Number</p>
        <p className="text-xl">
          Guess a number from 1-100 using the questions provided!
        </p>
        <p className="font-bold text-4xl text-secondary ">{new Date(time * 1000).toISOString().slice(11, 19)}</p>
      </div>
      <div className="flex w-screen text-center">
        <div className="w-1/3">
          <p className="font-bold text-7xl text-secondary">{lives}</p>
          <p className="text-xl">Lives Remaining</p>
        </div>
        <div className="w-1/3 my-auto flex flex-col mt-5">
          <input
            type="text"
            value={inputValue}
            onChange={inputNumber}
            className={"mx-auto bg-transparent text-center w-28 text-6xl outline rounded-xl outline-secondary" + (wrongGuess ? ' animate-shake' : '')}
            maxLength={3}
          />
          <button
            onClick={onSubmit}
            className=" bg-primary text-center flex  mx-auto my-4 w-48 min-w-max rounded-xl py-2 justify-center  text-text hover:bg-accent hover:shadow-md transition-all duration-300 font-semibold "
          >
            Submit
          </button>
        </div>
        <div className="w-1/3">
          <p className="font-bold text-7xl text-secondary">{guesses.length}</p>
          <p className="text-xl">Guesses</p>
        </div>
      </div>
      {guesses.length != 0 && (
        <div className="flex justify-center mx-auto flex-col text-center animate-show">
          <p className="text-4xl my-4 mb-0 font-semibold">Clues</p>
          <div className="flex gap-8 justify-center mx-auto my-4 flex-wrap gap-y-4">
            {guesses.map((v, i) => (
              <p
                key={i}
                className="text-xl bg-secondary px-4 py-2 rounded-xl text-background"
              >
                {v.guessString}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center mx-auto flex-col text-center">
        <p className="text-4xl my-4 mb-0 font-semibold">Guess</p>
        <div className="flex gap-8 justify-center mx-auto my-4 flex-wrap gap-y-4">
          {Object.values(GuessTypes)
            .filter((x) =>
              x == GuessTypes.ISEVEN || x == GuessTypes.ISPRIME
                ? !guesses.map((v) => v.guessType).includes(x)
                : x,
            )
            .map((v, i) => (
              <GuessBar key={i} guessType={v} onClick={addGuess} />
            ))}
        </div>
      </div>
      <ResultsModal game="guess" statistics={{time, guesses: guesses.length, lives}} isOpen={gameOver} />
      <AlertModal
        status={AlertTypes.ERROR}
        title={"Error"}
        text={"Enter a number!"}
        isOpen={errModal}
        setIsOpen={setErrModal}
      />
    </div>
  );
}
