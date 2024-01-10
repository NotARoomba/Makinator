import { useEffect, useState } from "react";
import { callAPI } from "../utils/Functions";
import { useNavigate } from "react-router-dom";
import { User as UserIcon } from "react-feather";
import { User } from "../utils/Types";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (userID) {
      const updateUser = async () => {
        const userData = await callAPI(`/users/${userID}`, "GET");
        setUser(userData);
      };
      updateUser();
    }
  }, [navigate]);
  return (
    <div className="text-text bg-transparent h-full my-auto flex">
      <div className="m-auto align-middle justify-center flex">
        <div className="flex">
          {user?.avatar !== "" ? (
            <img src={user?.avatar} />
          ) : (
            <UserIcon size={100} />
          )}
        </div>
      </div>
    </div>
  );
}
