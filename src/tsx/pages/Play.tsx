import Letters from "../components/Letters";
import NavButton from "../components/NavButton";

export default function Play() {
  return (
    <div className="bg-transparent text-text min-h-[calc(100vh-80px)] my-auto flex -mt-20">
      <div className="mx-auto justify-center w-full align-middle my-auto z-20">
        <p className="text-4xl font-semibold text-center my-4">Game Modes</p>
        <div className="mx-auto justify-center flex">
          <NavButton route="/play/guess" text="Guess the Number" />
          <NavButton route="/play/pi" text="Digits of PI" />
          <NavButton route="/play/online" text="Online Play" />
        </div>
      </div>
      <Letters />
    </div>
  );
}
