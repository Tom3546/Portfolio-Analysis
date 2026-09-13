import { useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

type Theme = "dark" | "light";

function getTheme() {
  const savedTheme = localStorage.getItem("theme") as Theme;
  if (savedTheme) {
    return savedTheme;
  }

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  return systemPrefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = getTheme();
    document.documentElement.setAttribute("data-theme", initialTheme);
    return initialTheme;
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
        border-2 border-border cursor-pointer hover:bg-bg-light group"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
      <span
        className="absolute rounded-md px-2 py-1 mt-20 bg-bg-light 
          text-text-muted text-sm invisible opacity-20 group-hover:visible 
          group-hover:opacity-100 group-hover:translate-y-3 duration-100"
      >
        {theme === "dark" ? "Toggle light" : "Toggle dark"}
      </span>
    </button>
  );
}
