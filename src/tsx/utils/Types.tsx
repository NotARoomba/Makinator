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
  lives: number;
  score: number;
}

export interface ResultsModalProps {
  game: string;
  statistics: GuessStatistics;
  highscore: GuessStatistics;
  setIsOpen: (o: boolean) => void;
  isOpen: boolean;
}

export interface LinkButtonProps {
  text: string;
  route?: string;
  action?: () => void;
  disabled?: boolean;
}

export enum STATUS_CODES {
  SUCCESS,
  GENERIC_ERROR,
  USER_NOT_FOUND,
  INVALID_EMAIL,
  INVALID_SERVICE,
  SENT_CODE,
  EMAIL_NOT_EXIST,
  ERROR_SENDING_CODE,
  CODE_DENIED,
  CODE_EXPIRED,
  CODE_FAILED,
  NO_CONNECTION,
  EMAIL_IN_USE,
  USERNAME_IN_USE,
  NONE_IN_USE,
}

export interface VerificationModalProps {
  email: string;
  isOpen: boolean;
  setOpen: (o: boolean) => void;
  action: (v: boolean) => void;
}

export enum GAMES {
  MAKINATOR_GUESS = "makinatorData.guessGames",
  MAKINATOR_PI = "makinatorData.piGames",
  MAKINATOR_ONLINE = "makinatorData.onlineGames",
}

export interface User {
  avatar: string;
  username: string;
  email: string;
  dateJoined: Date;
}
