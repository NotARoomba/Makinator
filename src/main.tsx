import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./tsx/pages/Home.tsx";
import Error from "./tsx/pages/Error.tsx";
import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./tsx/components/NavBar.tsx";
import Play from "./tsx/pages/Play.tsx";
import Guess from "./tsx/pages/Guess.tsx";
import Letters from "./tsx/components/Letters.tsx";
import Login from "./tsx/pages/Login.tsx";
import Signup from "./tsx/pages/Signup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Letters />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/play" element={<Play />} errorElement={<Error />} />
        <Route
          path="/play/guess"
          element={<Guess />}
          errorElement={<Error />}
        />
        <Route path="/login" element={<Login />} errorElement={<Error />} />
        <Route path="/login" element={<Signup />} errorElement={<Error />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
