import { ReactElement, ReactNode } from "react";
import { OnlineMakinatorGame } from "../../../../NotARoomba-Backend/models/online";

export interface NavButtonProps {
  route: string;
  text: string;
}
export enum GuessTypes {
  DIVISIBLE = "Is the number divisible by x?",
  MULTIPLE = "Is the number a multiple of x?",
  ISEVEN = "Is the number even?",
  ISPRIME = "Is the number a prime number?",
  FACTORS = "Is the number made of x factors?",
  LESSTHAN = "Is the number less than x?",
  GREATERTHAN = "Is the number greater than x?",
}

export interface BaseModalProps {
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
}

export interface AlertModalProps extends BaseModalProps {
  title: string;
  text: string;
  cancel?: boolean;
  action?: () => void;
}

export interface GuessBarProps {
  guessType: GuessTypes;
  onClick: (t: GuessTypes, i: string) => void;
}

export interface GuessList {
  guessType: GuessTypes;
  guessString: string;
}

export interface BaseStatistics {
  time: number; //in s
  lives: number;
  score: number;
}

export interface GuessStatistics extends BaseStatistics {
  guesses: number;
}

export interface IrrationalGuessStatistics extends BaseStatistics {
  digits: number;
}

export interface ResultsModalProps extends BaseModalProps {
  game: GAMES;
  statistics: Statistics;
  highscore: Statistics;
  resetGame: () => void;
}

export type Statistics = GuessStatistics | IrrationalGuessStatistics;

export interface LinkButtonProps {
  text: string;
  route?: string;
  action?: () => void;
  disabled?: boolean;
  selected?: boolean;
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
  NO_GAME_FOUND,
  GAME_FULL,
}

export enum NotARoombaEvents {
  CONNECT = "connect",
  DISCONNECT = "disconnect",
  REGISTER_USER = "register_user",
  JOIN_GAME = "join_game",
  CREATE_GAME = "create_game",
  UPDATE_GAME_DATA = "update_game_data",
  REQUEST_GAME_DATA = "request_game_data",
  UPDATE_GAME_STATE = "update_game_state",
  START_GAME = "start_game",
  END_GAME = "end_game",
}

export interface VerificationModalProps extends BaseModalProps {
  email: string;
  action: (v: boolean) => void;
}

export enum GAMES {
  MAKINATOR_GUESS = "makinatorData.guessGames",
  MAKINATOR_PI = "makinatorData.piGames",
  MAKINATOR_E = "makinatorData.eGames",
  MAKINATOR_ONLINE = "makinatorData.onlineGames",
}

export interface User {
  _id: string;
  avatar: string;
  username: string;
  email: string;
  dateJoined: Date;
}

export interface LoadingScreenProps {
  loading: boolean;
  text?: string;
  children?: ReactNode;
}

export interface Game {
  score: number;
  gamesPlayed: number;
}

export interface GameStats {
  game: Game;
  gamesPlayed: number;
}

export interface HighScoreBlockProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ReactElement<any, any>;
  highscore: number;
  gamesPlayed: number;
}

export interface HighScore {
  _id: string;
  username: string;
  avatar: string;
  score: number;
  time: number;
}

export interface IrrationalGuessProps {
  gameType: GAMES.MAKINATOR_PI | GAMES.MAKINATOR_E;
  online?: boolean;
  initialData?: OnlineMakinatorGame | null;
}
