import { Link } from "react-router-dom";
import { LinkButtonProps } from "../utils/Types";

export default function LinkButton({
  route,
  action,
  text,
  disabled,
  selected,
}: LinkButtonProps) {
  return route ? (
    <Link
      to={route}
      className={
        "px-4 min-w-36 xl:min-w-44 max-w-52 mt-4 rounded-xl hover:bg-primary-500 hover:shadow-md transition-all duration-300 text-xl md:text-xl py-2 mx-auto font-bold " +
        (selected ? "bg-primary-800" : "bg-primary")
      }
    >
      {text}
    </Link>
  ) : (
    <button
      disabled={disabled}
      onClick={action}
      className={
        "px-4 min-w-36 xl:min-w-44 max-w-52 mt-4 rounded-xl hover:bg-primary-500 hover:shadow-md transition-all duration-300 text-xl md:text-xl py-2 mx-auto font-bold " +
        (selected ? "bg-primary-800" : "bg-primary")
      }
    >
      {text}
    </button>
  );
}
