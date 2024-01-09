

export default function Home() {
  return (
    <div className=" text-text bg-transparent min-h-[calc(100vh-80px)] -mt-20 flex">
      <div className="w-1/2 my-auto text-right z-20">
        <h1 className="text-8xl font-bold">Makinator</h1>
        <p className="text-xl">An intelectual math game!</p>
      </div>
      <div className="w-1/12"></div>
      <div className="w-1/2 my-auto z-20">
        <img className="my-auto" src="/img/logo.png" />
      </div>
    </div>
  );
}
