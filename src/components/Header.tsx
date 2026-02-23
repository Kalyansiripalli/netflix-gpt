import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, deleteUser } from "../utils/userSlice";
import { headerLogo, userAvatar } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDetails = {
          displayName: user.displayName,
          uid: user.uid,
          email: user.email,
        };
        dispatch(addUser(userDetails));
        navigate("/browse");
      } else {
        deleteUser();
        navigate("/");
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className={`w-full h-16  flex justify-between items-center bg-black`}>
      <img src={headerLogo} alt="Logo" className="w-36 h-16 "></img>
      {user && (
        <div className="flex gap-1 flex-row">
          <img
            src={userAvatar}
            alt="userAvatar"
            className="w-8 h-8 cursor-pointer mr-3"
            onClick={() => handleSignOut()}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
