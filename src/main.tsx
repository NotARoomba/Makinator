import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./tsx/pages/Home.tsx";
import Error from "./tsx/pages/Error.tsx";
import "./css/index.css";
import {
  redirect,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Play from "./tsx/pages/Play.tsx";
import Guess from "./tsx/pages/Guess.tsx";
import Login from "./tsx/pages/Login.tsx";
import Signup from "./tsx/pages/Signup.tsx";
import Profile from "./tsx/pages/Profile.tsx";
import { callAPI } from "./tsx/utils/Functions.tsx";
import { STATUS_CODES } from "./tsx/utils/Types.tsx";
import NavbarWrapper from "./tsx/components/NavbarWrapper.tsx";
const loader = async (log: boolean) => {
  const userID = localStorage.getItem("userID");
  const validUser =
    (await callAPI(`/users/${userID}`, "GET"))
    // first check if there is a userID and that it is valid to prevent users from going to login and signup
    // second if they are going to profile the the opposite and return the user data
  if (log) {
    // needs to check if logged in and kick out
    if (userID && validUser.status === STATUS_CODES.SUCCESS) {
      return redirect("/profile")
    } else {
      // localStorage.clear();
      return null
    }
  } else {
    if (!userID && validUser.status !== STATUS_CODES.SUCCESS) {
      // localStorage.clear()
      return redirect("/login")
    }
  }
};
const router = createBrowserRouter([
  {
      path: "/", 
      element: <NavbarWrapper/>,
      errorElement: <Error />,
      children:[
           {
               path: "/", // yes, again
               element: <Home/>,
               errorElement: <Error />
           },
           {
               path: "/play",
               element: <Play/>,
               errorElement: <Error />
           },
           {
            path: "/play/guess",
            element: <Guess/>,
            errorElement: <Error />
           },
           {
            path: "/login",
            element: <Login/>,
            errorElement: <Error />,
            loader: () => loader(true)
           },
           {
            path: "/signup",
            element: <Signup />,
            errorElement: <Error />,
            loader: () => loader(true)
           },
           {
            path: "/profile",
            element: <Profile />,
            errorElement: <Error />,
            loader: () => loader(false)
           }
      ]
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
