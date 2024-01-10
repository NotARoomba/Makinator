import { useState } from "react";
import LinkButton from "../components/LinkButton";
import { callAPI } from "../utils/Functions";
import { AlertTypes, STATUS_CODES } from "../utils/Types";
import AlertModal from "../components/AlertModal";
import VerificationModal from "../components/VerificationModal";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [alertModal, setAlertModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState(["Error", "An error occured!"]);
  const [loading, setIsLoading] = useState(false);
  const [verification, setVerification] = useState(false);
  const setAlert = (msg: string, title?: string) => {
    title ? setAlertMsg([title, msg]) : setAlertMsg(["Error", msg])
    setAlertModal(true);
  };
  const parseLogin = async () => {
    setIsLoading(true);
    const doesExist = await callAPI("/users/check", "POST", {
        email,
      });
      if (doesExist.status !== STATUS_CODES.GENERIC_ERROR) {
        setIsLoading(false);
        if (doesExist.status !== STATUS_CODES.EMAIL_IN_USE)
          return setAlert("There is no account with that email!");
    const res = await callAPI("/verify/send", "POST", {
    email,
    service: "Makinator Verification",
    });
    if (res.status === STATUS_CODES.ERROR_SENDING_CODE)
        return setAlert("There was an error sending the code!");
    else setVerification(true);
}
  };
  const checkLogin = async (v: boolean) => {
    if (!v) return setAlert("The verification code is incorrect!");
    setVerification(false);
    setAlert("You are now logged in!", "Success");
    const res = await callAPI(`/users/${email}`, "GET")
    if (res.status === STATUS_CODES.SUCCESS) {
        localStorage.clear()
        localStorage.setItem("userID", res.user._id)
    }
    navigate("/");
    navigate(0);
  };
  return (
    <div className="bg-background text-text mb-auto text-center min-h-[calc(100vh-80px)] flex">
      <div className="mx-auto justify-center w-full align-middle text-center">
        <p className="text-4xl my-4 font-semibold">Login</p>
        <hr className="w-4/12 mx-auto mb-4"></hr>
        <div className="text-2xl justify-center mx-auto flex flex-col">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) =>
              setEmail(e.currentTarget.value.toLocaleLowerCase())
            }
            className="mx-auto my-2 bg-transparent text-center outline rounded outline-primary"
          />
          <Link to="/signup" className="text-secondary text-center text-lg hover:underline transition-all duration-300 w-fit mx-auto ">Need to sign up?</Link>
          <LinkButton disabled={loading} text="Submit" action={parseLogin} />
        </div>
      </div>
      <VerificationModal
        setOpen={setVerification}
        isOpen={verification}
        email={email}
        action={checkLogin}
      />
      <AlertModal
        status={AlertTypes.ERROR}
        title={alertMsg[0]}
        text={alertMsg[1]}
        isOpen={alertModal}
        setIsOpen={setAlertModal}
      />
    </div>
  );
}
