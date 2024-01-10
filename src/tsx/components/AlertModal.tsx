import Modal from "react-modal";

import { AlertModalProps } from "../utils/Types";
import { AlertCircle, CheckCircle, XCircle } from "react-feather";

export default function AlertModal({
  title,
  text,
  isOpen,
  setIsOpen,
}: AlertModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      className={
        " w-1/6 rounded-xl h-1/3 min-h-80 min-w-80 bg-background text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      overlayClassName={
        "bg-text-800/80 absolute w-screen h-screen top-0 left-0 " +
        (isOpen ? "animate-show" : "animate-hide")
      }
      closeTimeoutMS={300}
    >
      <div className="w-full h-full flex flex-col">
        {title.toLocaleLowerCase() == 'error' ? (
          <XCircle size={100} className="mx-auto mt-8 mb-4" color="#D7263D" />
        ) : title.toLocaleLowerCase() == 'warning' ? (
          <AlertCircle size={100} className="mx-auto mt-8 mb-4" color="#F46036" />
        ) : (
          <CheckCircle size={100} className="mx-auto mt-8 mb-4" color="#1B998B" />
        )}
        <p className="text-4xl mx-auto font-bold">{title}</p>
        <p className="text-xl mx-auto">{text}</p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 w-36 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-2xl py-2 mx-auto"
        >
          Ok
        </button>
      </div>
    </Modal>
  );
}
