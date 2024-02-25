import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { io } from "socket.io-client";
import { getCookie } from "../utils/Functions";
import { NotARoombaEvents } from "../utils/Types";
import AlertModal from "../components/modals/AlertModal";

export default function OnlineGame() {
  // need to check if the game is valid and if not then post an error ahd durect back to online menu, if it is valid then check if 2 users are already in game and if so then send to main menu and then later check if the user isnt the same and then if not then add the user to the gameData and start the game,
    const socket = io('https://api.notaroomba.dev', {transports: ['websocket']});
    const navigate = useNavigate()
    const [alert, setAlert] = useState(false);
    const [started, setStarted] = useState(false);
    const {gameID} = useParams();
    useEffect(() => {
      // socket.open();
      socket.emit(NotARoombaEvents.REGISTER_USER, getCookie('userID'), (id: string | null) => {
        console.log(id)
        if (!id) {
          setAlert(true)
        } 

      });
    })
    socket.on(NotARoombaEvents.START_GAME, async () => {
      setStarted(true);
    })
    return  (<div className="bg-transparent text-text h-full flex ">
    <div className="justify-center w-full align-middle m-auto z-10 ">
      {!started ? <p className="text-4xl font-semibold text-center my-4 ">Online Play: {gameID}</p> : <p className="text-4xl font-semibold text-center my-4">GameStarted</p>}<AlertModal title="Error" text="This game is unavailable to join!" action={() => navigate("/play/online")} isOpen={alert} setIsOpen={setAlert} /></div></div>)
}