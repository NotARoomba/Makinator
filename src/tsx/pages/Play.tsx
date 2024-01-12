import NavButton from "../components/NavButton";
import Transitions from "../components/Transitions";

export default function Play() {
  document.documentElement.style.overflowY = "hidden";
  return (
    <Transitions>
      <div className="bg-transparent text-text h-full flex ">
        <div className="justify-center w-full align-middle m-auto z-10">
          <p className="text-4xl font-semibold text-center my-4">Game Modes</p>
          <div className="mx-auto justify-center flex flex-wrap">
            <NavButton route="/play/guess" text="Guess the Number" />
            <NavButton route="/play/pi" text="Digits of PI" />
            <NavButton route="/play/online" text="Online Play" />
          </div>
        </div>
      </div>
    </Transitions>
  );
}
