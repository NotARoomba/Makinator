import NavButton from "../components/NavButton";

export default function Error() {
  return (
    <div className="bg-background text-text mb-auto text-center min-h-[calc(100vh-80px)] flex">
      <div className="m-auto align-middle justify-center flex flex-col">
        <p className="text-center text-8xl my-3 mb-8 font-bold">
          404
        </p>
        <p className="text-2xl md:text-4xl font-semibold">This page does not exist!</p>
        <div className="mx-auto">
          <NavButton text="Home" route="/" />
        </div>
      </div>
    </div>
  );
}
