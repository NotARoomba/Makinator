import NavButton from "../components/navbar/NavButton";
import Transitions from "../components/effects/Transitions";

export default function Error() {
  return (
    <Transitions>
      <div className="bg-background text-text mb-auto text-center h-full flex">
        <div className="m-auto align-middle justify-center h-full flex flex-col">
          <p className="text-center text-8xl my-3 font-bold">404</p>
          <p className="text-2xl md:text-4xl font-semibold">
            This page does not exist! (yet...)
          </p>
          <div className="mx-auto">
            <NavButton text="Home" route="/" />
          </div>
        </div>
      </div>
    </Transitions>
  );
}
