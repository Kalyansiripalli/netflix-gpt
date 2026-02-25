import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, deleteUser } from "../utils/userSlice";
import { headerLogo, userAvatar } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleNetflixGptPage } from "../utils/netflixGptSlice";
import { LogOut, SparkleIcon, Sparkles } from "lucide-react";

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
        {user && (
          <>
            <button
              onClick={handleGptPageToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200
                ${isGptPageActive ? "bg-linear-to-r from-purple-500 to-pink-500 cursor-pointer" : "bg-linear-to-r from-blue-300 to-indigo-700 cursor-pointer"}
                hover:scale-105 hover:brightness-110 focus:outline-none`}
            >
              <span className="text-white">
                {isGptPageActive ? "Home" : "Netflix GPT"}
              </span>
              <Sparkles className="text-white w-5 h-5" />
            </button>
            <div className="flex gap-1 flex-row bg-white rounded-full p-2 ">
              <LogOut
                className="text-black w-5 h-5 cursor-pointer"
                onClick={() => handleSignOut()}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
