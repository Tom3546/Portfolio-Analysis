import { useState } from "react";
import { Lottie } from "lottie-react";
import LightDarkMode from "../../assets/LightDarkMode.json";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const selectedTheme = (localStorage.getItem("theme") || "dark") as Theme;
    document.documentElement.setAttribute("data-theme", selectedTheme);
    return selectedTheme;
  });

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }

  return (
    <button
      onClick={toggleTheme}
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
  );
}
