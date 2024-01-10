import { Link } from "react-router-dom";
import { LinkButtonProps } from "../utils/Types";

export default function LinkButton({
  route,
  action,
  text,
  disabled,
}: LinkButtonProps) {
  return route ? (
    <Link
      to={route}
      className="px-4 w-36 xl:w-44 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-xl md:text-2xl py-2 mx-auto"
    >
      {text}
    </Link>
  ) : (
    <button
      disabled={disabled}
      onClick={action}
      className="px-4 w-36 xl:w-44 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-xl md:text-2xl py-2 mx-auto"
    >
      {text}
    </button>
  );
}
