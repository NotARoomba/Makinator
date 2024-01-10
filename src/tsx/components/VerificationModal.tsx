import { STATUS_CODES, VerificationModalProps } from "../utils/Types";
import Modal from "react-modal";
import LinkButton from "./LinkButton";
import { callAPI } from "../utils/Functions";
import { useState } from "react";

export default function VerificationModal({
  email,
  isOpen,
  action,
  setOpen,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const verifyCode = async () => {
    const check = await callAPI("/verify/check", "POST", { email, code });
    if (check.status !== STATUS_CODES.SUCCESS) return action(false);
    else action(true);
  };
  return (
    <Modal
        ariaHideApp={false}
      isOpen={isOpen}
      className={
        " w-3/12 p-10 rounded-xl h-1/3 min-h-80 min-w-80 bg-background text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      overlayClassName={
        "bg-text-800/80 absolute w-screen h-screen top-0 left-0 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      closeTimeoutMS={300}
    >
      <div className="w-full h-full flex flex-col text-center justify-around">
        <p className="text-5xl font-bold mt-2">Verification</p>
        <p className="text-xl  mt-2">
          Enter the verification code that was sent to{" "}
          <p className="font-bold">{email}</p>
        </p>
        <input
          value={code}
          onChange={(e) => setCode(e.currentTarget.value)}
          className="mx-auto my-2 mt-5 bg-transparent text-center outline rounded outline-primary"
        />
        <div className="flex gap-2">
          <LinkButton text="Cancel" action={() => setOpen(false)} />
          <LinkButton text="Submit" action={verifyCode} />
        </div>
      </div>
    </Modal>
  );
}
