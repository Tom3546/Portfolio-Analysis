import { useState } from "react";
import { Lottie } from "lottie-react";
import LightDarkMode from "../../assets/LightDarkMode.json";

export default function TopBar() {
  const [isDark, setIsDark] = useState(true);
  function handleMode() {}
  return (
    <div className="flex items-center justify-between w-full h-18 p-4">
      <div className="">
        <h1>PlaceHolder</h1>
      </div>
      <button
        onClick={handleMode}
        className="flex items-center justify-center h-10 w-10 rounded-md 
        border-2 border-border cursor-pointer"
      >
        <Lottie
          src={LightDarkMode}
          loop={false}
          autoplay={false}
          className="w-5 h-5"
        />
      </button>
    </div>
  );
}
