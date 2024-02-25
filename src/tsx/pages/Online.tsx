import { useEffect, useState } from "react";
import Transitions from "../components/effects/Transitions";
import LinkButton from "../components/misc/LinkButton";
import { io } from "socket.io-client";
import { GAMES, NotARoombaEvents, STATUS_CODES } from "../utils/Types";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/Functions";
import AlertModal from "../components/modals/AlertModal";

export default function Online() {
    const [code, setCode] = useState("");
    const [alert, setAlert] = useState(false);
    const socket = io('https://api.notaroomba.dev', {transports: ['websocket']});
    const navigate = useNavigate()
    useEffect(() => {
      socket.open();
      socket.emit(NotARoombaEvents.REGISTER_USER, getCookie('userID'), (gameID: string | null) => {
        if (gameID) {
          console.log("CURRENT GAME: ", gameID)
          navigate(`/play/online/${gameID}`)
        }

      });
    })
    const createGame = () => {
        socket.emit(NotARoombaEvents.CREATE_GAME, getCookie('userID'), GAMES.MAKINATOR_PI, (gameID: string) => {
          console.log(gameID)
          navigate(`/play/online/${gameID}`)
        })
    }
    const joinGame = () => {
      socket.emit(NotARoombaEvents.JOIN_GAME, getCookie('userID'), code, GAMES.MAKINATOR_PI, (status: STATUS_CODES) => {
        console.log(status)
        if (status == STATUS_CODES.SUCCESS)
          navigate(`/play/online/${code}`)
        else
          setAlert(true)

      })
  }
    return (<Transitions>
        <div className="bg-transparent text-text h-full flex ">
          <div className="justify-center w-full align-middle m-auto z-10 ">
            <p className="text-4xl font-semibold text-center my-4 ">Online Play</p>
            <div className="mx-auto flex mb-3">
            <input
                    value={code}
                    maxLength={6}
                    onChange={(e) => setCode(e.currentTarget.value)}
                    className="mx-auto my-2 bg-transparent w-40 text-3xl uppercase font-bold text-center outline rounded outline-primary"
                    />

            </div>
            <div className="mx-auto justify-center flex flex-wrap">
              <LinkButton action={createGame} text="Create Game" />
                        
                    <LinkButton action={joinGame} text="Join Game" />
              <LinkButton route="/online/history" text="History" />
            </div>
          </div>
          <AlertModal title="Error" text="This game is unavailable to join!" isOpen={alert} setIsOpen={setAlert} />
        </div>
      </Transitions>)
}