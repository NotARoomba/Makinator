import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useState } from "react";

export default function NavBar() {
  const [menu, setM] = useState(false);
  const setMenu = (value: boolean) => {
    setM(value);
    document.body.style.overflowY = value ? "hidden" : "auto";
  };

  return (
    <div className="flex w-screen mx-auto shadow-lg h-20  bg-background border-b-2 border-background-800 z-20">
      <div className="w-1/2">
        <Link
          to="/"
          className=" justify-left flex align-middle transition w-fit"
        >
          <div className="group flex align-middle my-auto">
            <img src="/img/logo.png" className="h-14 m-2 rounded-xl" />
            <div className="flex my-auto  flex-col justify-center align-middle max-w-fit">
              <p className="text-left m-4 mb-0 text-4xl font-bold bg-gray bg-gradient-to-r from-text to-text bg-clip-text text-transparent">
                Makinator
              </p>
              <hr className="bg-gradient-to-r from-primary to-accent max-w-0 group-hover:max-w-full transition-all duration-500 h-1 border-none rounded-xl mb-4" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex w-1/2 justify-end items-center">
        <div
          className="flex lg:hidden group items-center flex-col w-16 aspect-square py-3 hover:bg-background-800 dark:hover:bg-background-800 rounded-lg mr-2 p-1 my-auto align-middle cursor-pointer transition-all "
          onClick={() => setMenu(!menu)}
        >
          <span
            className={
              "bg-gray dark:bg-text w-10 block h-1 rounded my-auto duration-300" +
              (menu ? " -rotate-45 translate-y-[13px]" : " rotate-0")
            }
          ></span>
          <span
            className={
              " w-10 block h-1 rounded my-auto duration-300" +
              (menu ? " bg-transparent " : " bg-gray dark:bg-text")
            }
          ></span>
          <span
            className={
              "bg-gray dark:bg-text w-10 block h-1 rounded my-auto duration-300" +
              (menu ? " rotate-45 -translate-y-[13px]" : " rotate-0")
            }
          ></span>
        </div>

        <div className="justify-left hidden lg:flex text-lg text-gray gap-4 mx-4">
          <NavButton route="/play" text="Play" />
          <NavButton route="/login" text="Login" />
        </div>
      </div>
      <div
        onClick={() => setMenu(false)}
        className={
          " bg-white/80 dark:bg-primary/80 w-3/5 absolute h-fit top-20 z-10 justify-center transition duration-300 flex flex-wrap" +
          (menu ? " animate-show" : " animate-hide hidden")
        }
      >
        <NavButton route="/play" text="Play" />
        <NavButton route="/login" text="Login" />
        {/* <ThemeButton theme={theme} changeTheme={changeTheme}  /> */}
      </div>
    </div>
  );
}
