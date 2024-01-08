import { useState } from "react";
import { GuessBarProps } from "../utils/Types";

export default function GuessBar({ guessType, onClick }: GuessBarProps) {
  const [inputValue, setInputValue] = useState("");
  const inputNumber = (input: React.FormEvent<HTMLInputElement>) => {
    if (!Number.isNaN(input.currentTarget.value)) {
      const converted = parseInt(input.currentTarget.value);
      setInputValue(!converted ? "" : converted.toString());
    }
  };
  return (
    <div
      className="text-xl bg-background-800 text-text px-4 py-2 rounded-xl flex cursor-pointer"
      onClick={() => onClick(guessType, inputValue)}
    >
      {guessType.includes("x") ? (
        <>
          <p className="mr-2">{guessType.split("x")[0]}</p>
          <input
            value={inputValue}
            maxLength={3}
            onInput={inputNumber}
            className="mx-auto bg-transparent text-center w-9 outline rounded outline-primary"
          />
          <p className="ml-2">{guessType.split("x")[1]}</p>
        </>
      ) : (
        <p>{guessType}</p>
      )}
    </div>
  );
}
