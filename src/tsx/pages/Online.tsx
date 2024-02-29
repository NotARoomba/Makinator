import { useEffect, useState } from "react";
import Transitions from "../components/effects/Transitions";
import LinkButton from "../components/misc/LinkButton";
import { GAMES, NotARoombaEvents, STATUS_CODES } from "../utils/Types";
import { useNavigate } from "react-router-dom";
import { checkIfLogin, getCookie } from "../utils/Functions";
import AlertModal from "../components/modals/AlertModal";
import { OnlineMakinatorGame } from "../../../../NotARoomba-Backend/models/online";
import LoadingScreen from "../components/effects/LoadingScreen";
import { socket } from "../../main";

export default function Online() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    // socket.open();
    checkIfLogin().then((user) => {
      if (!user) {
        navigate("/login");
        return navigate(0);
      }
      socket.open();
      socket.emit(
        NotARoombaEvents.REGISTER_USER,
        getCookie("userID"),
        null,
        (game: OnlineMakinatorGame | null) => {
          setLoading(false);
          if (game) {
            console.log("CURRENT GAME: ", game.gameID);
            navigate(`/play/online/${game.gameID}`);
          }
        },
      );
    });
  }, []);
  const createGame = () => {
    setLoading(true);
    socket.emit(
      NotARoombaEvents.CREATE_GAME,
      getCookie("userID"),
      GAMES.MAKINATOR_PI,
      (gameID: string) => {
        setLoading(false);
        console.log(gameID);
        navigate(`/play/online/${gameID}`);
      },
    );
  };
  const joinGame = () => {
    setLoading(true);
    socket.emit(
      NotARoombaEvents.JOIN_GAME,
      getCookie("userID"),
      code,
      GAMES.MAKINATOR_PI,
      (status: STATUS_CODES) => {
        setLoading(false);
        console.log(status);
        if (status == STATUS_CODES.SUCCESS) navigate(`/play/online/${code}`);
        else setAlert(true);
      },
    );
  };
  return (
    <Transitions>
      <div className="bg-transparent text-text h-full flex ">
        <div className="justify-center w-full align-middle m-auto z-10 ">
          <p className="text-4xl font-semibold text-center my-4 ">
            Online Play
          </p>
          <div className="mx-auto flex mb-3">
            <input
              value={code}
              maxLength={6}
              onChange={(e) => setCode(e.currentTarget.value.toUpperCase())}
              className="mx-auto my-2 bg-transparent w-40 text-3xl uppercase font-bold text-center outline rounded outline-primary"
            />
          </div>
          <div className="mx-auto justify-center flex flex-wrap gap-y-6">
            <LinkButton action={createGame} text="Create Game" />

            <LinkButton action={joinGame} text="Join Game" />
            <LinkButton route="/play/online/history" text="History" />
          </div>
        </div>
        <AlertModal
          title="Error"
          text="This game is unavailable to join!"
          isOpen={alert}
          setIsOpen={setAlert}
        />
        <LoadingScreen loading={loading} />
      </div>
    </Transitions>
  );
}
