import { Link, useLocation } from "react-router-dom";

export default function Credits() {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("guess") ? (
        <div className="absolute flex justify-center align-middle bottom-0 left-1/2  -translate-x-1/2 text-text bg-background/60 rounded-t-xl -z-10">
          <Link
            className="h-min max-h-fit m-2 hover:underline"
            to="https://notaroomba.dev"
          >
            Website
          </Link>
          <p className="m-2">•</p>
          <p className="m-2 font-bold">NotARoomba</p>
          <p className="m-2">•</p>
          <Link
            className="h-min max-h-fit m-2 hover:underline"
            to="https://github.com/NotARoomba/Makinator"
          >
            GitHub
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
