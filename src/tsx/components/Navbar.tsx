import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useRef, useState } from "react";

export default function Navbar() {
  const [menu, setM] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const setMenu = (value: boolean) => {
    setM(value);
    if (!value)
      setTimeout(() => {
        if (menuRef.current) menuRef.current.style.display = "none";
      }, 300);
    else if (menuRef.current && value) menuRef.current.style.display = "flex";
    document.body.style.overflowY = value ? "hidden" : "auto";
  };

  return (
    <div className="flex w-screen mx-auto shadow-lg h-20  bg-background border-b-2 border-background-800 z-20 absolute top-0 left-0">
      <div className="w-1/2">
        <Link
          to="/"
          className=" justify-left flex align-middle transition w-fit"
        >
          <div className="group flex align-middle my-auto">
            <img src="/logo.png" className="h-14 m-2 rounded-xl" />
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
          {localStorage.getItem("userID") ? (
            <NavButton route="/profile" text="Profile" />
          ) : (
            <NavButton route="/login" text="Login" />
          )}
        </div>
      </div>
      <div
        onClick={() => setMenu(false)}
        ref={menuRef}
        className={
          " bg-white/80 dark:bg-primary/20 w-full absolute mx-auto h-fit top-20 z-30 justify-center flex-wrap transition duration-300" +
          (menu ? " animate-show" : " animate-hide hidden")
        }
      >
        <NavButton route="/play" text="Play" />
        {localStorage.getItem("userID") ? (
          <NavButton route="/profile" text="Profile" />
        ) : (
          <NavButton route="/login" text="Login" />
        )}
        {/* <ThemeButton theme={theme} changeTheme={changeTheme}  /> */}
      </div>
    </div>
  );
}
