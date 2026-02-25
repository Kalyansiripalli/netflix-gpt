import { loginPageBgImage } from "../utils/constants";
import GptSearch from "./GptSearch";

export const GptPage = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto w-full">
      <img
        src={loginPageBgImage}
        alt="loginPageBgImage"
        className="w-full h-full"
      />
      <div className="w-full h-full absolute bg-black opacity-70"></div>
      <div className="w-full h-full absolute">
        <GptSearch />
      </div>
      
    </div>
  );
};
