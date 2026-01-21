import { useRef, useState } from "react";
import Header from "./Header";
import {
  validateSignInData,
  validateSignUpData,
} from "../utils/validateFormData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleFormToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmission = () => {
    const message = isSignInForm
      ? validateSignInData(
          email.current?.value || "",
          password.current?.value || "",
        )
      : validateSignUpData(
          name.current?.value || "",
          email.current?.value || "",
          password.current?.value || "",
        );
    setErrorMessage(message);
    if (
      isSignInForm &&
      !message &&
      email.current?.value &&
      password.current?.value
    ) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else if (
      !isSignInForm &&
      email.current?.value &&
      password.current?.value
    ) {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_medium.jpg"
        alt="Background"
        className="h-screen w-screen"
      ></img>
      <div className="absolute left-0 top-0">
        <Header />
      </div>

      <div
        className="absolute left-[40vw] top-30 w-100 h-fit p-10 rounded-md"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      >
        <h1 className="text-white  font-bold text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          className="flex flex-col items-start text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              className="text-white bg-gray-800 w-full p-2 my-4 rounded-md border-[1] border-white focus:outline-white focus:border-none"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            type="email"
            className="text-white bg-gray-800 w-full p-2 my-4 rounded-md border-[1] border-white focus:outline-white focus:border-none"
            placeholder="Email Address"
          ></input>
          <input
            ref={password}
            type="password"
            className="text-white bg-gray-800 w-full p-2 my-4 rounded-md border-[1] border-white focus:outline-white focus:border-none"
            placeholder="Password"
          ></input>

          {errorMessage && (
            <span className="text-red-600 font-bold">{errorMessage}</span>
          )}
          <h1 className="">
            {isSignInForm ? "New to Netflix ?" : "Already have an account ?"}{" "}
            <span
              className="underline cursor-pointer"
              onClick={handleFormToggle}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
          </h1>
          <button
            type="button"
            className="p-2 my-4 bg-red-600 text-white w-full rounded-md cursor-pointer"
            onClick={handleFormSubmission}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
