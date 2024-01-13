import { Link, useLocation } from "react-router-dom";
import { NavButtonProps } from "../../utils/Types";

export default function NavButton({ route, text }: NavButtonProps) {
  const location = useLocation();
  return (
    <Link
      to={route}
      className={
        "group text-center flex  mx-auto xl:m-4 my-4 w-48 min-w-max rounded-xl py-2 justify-center  text-text hover:bg-primary-500 hover:shadow-md transition-all duration-300 font-semibold " +
        (location.pathname == route || location.pathname.includes(route)
          ? "shadow-xl bg-primary-800 text-text"
          : "bg-primary")
      }
    >
      <p className="align-middle h-full text-center">{text}</p>
    </Link>
  );
}
