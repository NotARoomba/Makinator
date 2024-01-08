import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className=" text-text bg-background min-h-[calc(100vh-208px)] flex">
      <div className="w-1/2 my-auto text-right">
        <h1 className="text-8xl font-bold">Makinator</h1>
        <p className="text-xl">An intelectual math game!</p>
      </div>
      <div className="w-1/12"></div>
      <div className="w-1/2 my-auto">
        <img className="my-auto" src="/img/logo.png" />
      </div>
    </div>
  );
}
