import ThemeToggle from "../ui/ThemeToggle";

import { Search } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="flex items-center justify-between w-full h-18 p-4 
      gap-2 border-border border-b"
    >
      <label
        className="flex items-center w-full max-w-md gap-2 p-2 rounded-md 
        border border-border focus-within cursor-text hover:bg-bg 
        focus-within:border-highlight transition-colors"
      >
        <Search className="shrink-0" />
        <input
          type="text"
          role="searchbox"
          placeholder="Wpisz ticker lub nazwę"
          className="outline-none w-full min-w-0 text-text"
        />
      </label>

      <ThemeToggle />
    </div>
  );
}
