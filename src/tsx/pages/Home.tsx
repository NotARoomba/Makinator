export default function Home() {
  return (
    <div className=" text-text bg-transparent min-h-[calc(100vh-80px)] -mt-20 mx-auto flex flex-col-reverse justify-center md:flex-row">
      <div className="md:w-1/2 my-auto text-center md:text-right z-20 justify-center mx-auto mt-0 md:my-auto">
        <h1 className="text-6xl lg:text-8xl font-bold">Makinator</h1>
        <p className="text-xl">An intelectual math game!</p>
      </div>
      <div className="md:w-1/2  mt-auto mb-0 md:my-auto z-20 mx-auto">
        <img className="my-auto mx-auto w-1/2" src="/img/logo.png" />
      </div>
    </div>
  );
}
