import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, deleteUser } from "../utils/userSlice";
import { headerLogo, userAvatar } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleNetflixGptPage } from "../utils/netflixGptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const isGptPageActive = useSelector(
    (store: any) => store?.netflixGpt?.showNetflixGptPage,
  );
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

  const handleGptPageToggle = () => {
    dispatch(toggleNetflixGptPage());
  };

  return (
    <div className={`w-full h-16  flex justify-between items-center bg-black`}>
      <img src={headerLogo} alt="Logo" className="w-36 h-16 "></img>
      <div className="flex gap-10 items-center">
        <p
          className="text-white underline cursor-pointer"
          onClick={() => handleGptPageToggle()}
        >
          {isGptPageActive ? `Home` : `Netflix GPT`}
        </p>
        {user && (
          <div className="flex gap-1 flex-row ">
            <img
              src={userAvatar}
              alt="userAvatar"
              className="w-8 h-8 cursor-pointer mr-3"
              onClick={() => handleSignOut()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
