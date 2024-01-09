import { Link } from "react-router-dom";
import { LinkButtonProps } from "../utils/Types";

export default function LinkButton({ route, action, text }: LinkButtonProps) {
  return route ? (
    <Link
      to={route}
      className="px-4 w-36 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-2xl py-2 mx-auto"
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={action}
      className="px-4 w-36 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-2xl py-2 mx-auto"
    >
      {text}
    </button>
  );
}
