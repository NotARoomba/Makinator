import ReactDropdown from "react-dropdown";
import { ChevronDown, ChevronUp } from "react-feather";

export default function Play() {
    return (<div className="bg-background text-text">
        <div className="mx-auto justify-center w-full">
            <p className="text-4xl font-semibold text-center my-4">Game Modes</p>
            <ReactDropdown className="w-full mx-auto" options={['Guess the Number']} arrowClosed={<ChevronUp />}
  arrowOpen={<ChevronDown />} />
        </div>
    </div>)
}