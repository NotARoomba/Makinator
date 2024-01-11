import { Triangle } from "react-loader-spinner";
import { LoadingScreenProps } from "../utils/Types";

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <div
      className={
        "absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background/80" +
        (loading ? " flex animate-show" : " animate-hide")
      }
    >
      <div className="m-auto">
        <Triangle
          visible={loading}
          height="200"
          width="200"
          color="#5435cb"
          ariaLabel="triangle-loading"
          wrapperClass={loading ? " flex animate-show" : " animate-hide"}
        />
        {loading && <div className={"flex mx-auto"}>
          <img src="/logo.png" className="h-14 m-2 rounded-xl" />
          <p className="text-left my-auto mb-5 -ml-3 font-bold text-text text-4xl">
            akinator
          </p>
        </div>}
      </div>
    </div>
  );
}
