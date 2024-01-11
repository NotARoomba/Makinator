import { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";
import { callAPI, checkIfLogin } from "../utils/Functions";
import { STATUS_CODES } from "../utils/Types";
import AlertModal from "../components/AlertModal";
import VerificationModal from "../components/VerificationModal";
import { Link, useNavigate } from "react-router-dom";
import Transitions from "../components/Transitions";
import LoadingScreen from "../components/LoadingScreen";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [alertModal, setAlertModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState(["Error", "An error occured!"]);
  const [loading, setIsLoading] = useState(false);
  const [verification, setVerification] = useState(false);
  const setAlert = (msg: string, title?: string) => {
    title ? setAlertMsg([title, msg]) : setAlertMsg(["Error", msg]);
    setAlertModal(true);
  };
  const parseSignup = async () => {
    setIsLoading(true);
    const doesExist = await callAPI("/users/check", "POST", {
      username,
      email,
    });
    console.log(doesExist);
    if (doesExist.status !== STATUS_CODES.GENERIC_ERROR) {
      setIsLoading(false);
      if (doesExist.status === STATUS_CODES.EMAIL_IN_USE)
        return setAlert("The email is already in use!");
      else if (doesExist.status === STATUS_CODES.USERNAME_IN_USE)
        return setAlert("The username is already in use!");
      const res = await callAPI("/verify/send", "POST", {
        email,
        service: "Makinator Verification",
      });
      if (res.status === STATUS_CODES.INVALID_EMAIL)
        return setAlert("That email is invalid!");
      else if (res.status === STATUS_CODES.EMAIL_NOT_EXIST)
        return setAlert("That email does not exist!");
      else if (res.status === STATUS_CODES.ERROR_SENDING_CODE)
        return setAlert("There was an error sending the code!");
      else setVerification(true);
    }
  };
  const checkSignup = async (v: boolean) => {
    if (!v) return setAlert("The verification code is incorrect!");
    setVerification(false);
    setAlert("You are now registered!", "Success");
    const previousGuessGames = JSON.parse(
      localStorage.getItem("guessStatistics") ?? "[]",
    );
    const previousPIGames = JSON.parse(
      localStorage.getItem("piStatistics") ?? "[]",
    );
    const previousOnlineGames = JSON.parse(
      localStorage.getItem("onlineStatistics") ?? "[]",
    );
    const res = await callAPI("/users/update", "POST", {
      username,
      email,
      dateJoined: Date.now(),
      avatar: "",
      makinatorData: {
        guessGames: previousGuessGames,
        piGames: previousPIGames,
        onlineGames: previousOnlineGames,
      },
    });
    if (res.status === STATUS_CODES.SUCCESS) {
      localStorage.clear();
      localStorage.setItem("userID", res.id);
    }
    navigate("/");
    navigate(0);
  };
  useEffect(() => {
    setIsLoading(true);
    checkIfLogin().then((l) => {
      if (l) {
        navigate("/profile");
      }
    });
    setIsLoading(false);
  }, [navigate]);
  return (
    <Transitions>
      <div className="bg-transparent text-text mb-auto text-center h-full flex">
        <div className="mx-auto justify-center w-full align-middle text-center mt-20">
          <p className="text-4xl my-4 font-semibold">Sign Up</p>
          <hr className="w-4/12 mx-auto mb-4"></hr>
          <div className="text-2xl justify-center mx-auto flex flex-col">
            <p>Username</p>
            <input
              value={username}
              maxLength={24}
              onChange={(e) => setUsername(e.currentTarget.value)}
              className="mx-auto my-2 bg-transparent text-center outline rounded outline-primary"
            />
            <p>Email</p>
            <input
              value={email}
              onChange={(e) =>
                setEmail(e.currentTarget.value.toLocaleLowerCase())
              }
              className="mx-auto my-2 bg-transparent text-center outline rounded outline-primary"
            />
            <Link
              to="/login"
              className="text-secondary text-center text-lg hover:underline transition-all duration-300 w-fit mx-auto "
            >
              Need to login?
            </Link>
            <LinkButton disabled={loading} text="Submit" action={parseSignup} />
          </div>
          <LoadingScreen loading={loading} />
        </div>
        <VerificationModal
          setIsOpen={setVerification}
          isOpen={verification}
          email={email}
          action={checkSignup}
        />
        <AlertModal
          title={alertMsg[0]}
          text={alertMsg[1]}
          isOpen={alertModal}
          setIsOpen={setAlertModal}
        />
      </div>
    </Transitions>
  );
}
