import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./tsx/pages/Home.tsx";
import Error from "./tsx/pages/Error.tsx";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Play from "./tsx/pages/Play.tsx";
import Guess from "./tsx/pages/Guess.tsx";
import Login from "./tsx/pages/Login.tsx";
import Signup from "./tsx/pages/Signup.tsx";
import Profile from "./tsx/pages/Profile.tsx";
import NavbarWrapper from "./tsx/components/navbar/NavbarWrapper.tsx";
import Leaderboards from "./tsx/pages/Leaderboards.tsx";
import Online from "./tsx/pages/Online.tsx";
import OnlineGame from "./tsx/pages/OnlineGame.tsx";
import IrrationalGuess from "./tsx/pages/IrrationalGuess.tsx";
import { GAMES } from "./tsx/utils/Types.tsx";
import { io } from "socket.io-client";
export const socket = io("https://api.notaroomba.dev", {
  transports: ["websocket"],
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    errorElement: <Error />,
    children: [
      {
        path: "/", // yes, again
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/play",
        element: <Play />,
        errorElement: <Error />,
      },
      {
        path: "/play/guess",
        element: <Guess />,
        errorElement: <Error />,
      },
      {
        path: "/play/pi",
        element: <IrrationalGuess gameType={GAMES.MAKINATOR_PI} />,
        errorElement: <Error />,
      },
      {
        path: "/play/e",
        element: <IrrationalGuess gameType={GAMES.MAKINATOR_E} />,
        errorElement: <Error />,
      },
      {
        path: "/play/online",
        element: <Online />,
        errorElement: <Error />,
      },
      {
        path: "/play/online/:gameID",
        element: <OnlineGame />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: "/leaderboards",
        element: <Leaderboards />,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
