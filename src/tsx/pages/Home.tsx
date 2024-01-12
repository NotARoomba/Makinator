import Transitions from "../components/Transitions";

export default function Home() {
  return (
    <Transitions>
      <div className=" text-text bg-transparent h-full mx-auto flex flex-col-reverse justify-center md:flex-row">
        <div className="md:w-1/2 my-auto text-center md:text-right z-20 justify-center mx-auto mt-0 md:my-auto">
          <h1 className="text-6xl lg:text-8xl font-bold">Makinator</h1>
          <p className="text-xl">An intelectual math game!</p>
        </div>
        <div className="md:w-1/2  mt-auto mb-0 md:my-auto z-10 mx-auto">
          <img className="my-auto mx-auto w-1/2" src="/logo.png" />
        </div>
      </div>
    </Transitions>
  );
}
