import NavButton from "../components/NavButton";

export default function Error() {
  return (
    <div className="bg-background text-text mb-auto text-center min-h-[calc(100vh-208px)] flex">
      <div className="m-auto align-middle justify-center flex flex-col">
        <p className="text-center md:text-5xl lg:text-7xl text-3xl my-3 mb-8 font-bold">
          404
        </p>
        <p className="text-4xl font-semibold">This page does not exist!</p>
        <div className="mx-auto">
          <NavButton text="Home" route="/" />
        </div>
      </div>
    </div>
  );
}
