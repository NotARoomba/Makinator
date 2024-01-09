export interface NavButtonProps {
  route: string;
  text: string;
}
export enum GuessTypes {
  DIVISIBLE = "Is the number divisible by x?",
  MULTIPLE = "Is the number a multiple of x?",
  ISEVEN = "Is the number even?",
  ISPRIME = "Is the number a prime number?",
  FACTORS = "Is the number composed of x factors?",
  LESSTHAN = "Is the number less than x?",
  GREATERTHAN = "Is the number greater than x?",
}

export enum AlertTypes {
  INFO,
  WARNING,
  ERROR,
}

export interface AlertModalProps {
  status: AlertTypes;
  title: string;
  text: string;
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
}

export interface GuessBarProps {
  guessType: GuessTypes;
  onClick: (t: GuessTypes, i: string) => void;
}

export interface GuessList {
  guessType: GuessTypes;
  guessString: string;
}

export interface GuessStatistics {
  time: number; //in s
  guesses: number;
  lives: number
}

export interface ResultsModalProps {
  game: string;
  statistics: GuessStatistics;
  highscore: GuessStatistics;
  isOpen: boolean;
}
