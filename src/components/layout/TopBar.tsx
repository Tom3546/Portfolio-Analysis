import ThemeToggle from "../ui/ThemeToggle";

import { Search } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="sticky top-0 flex justify-between w-full p-4 
      gap-2 border-border border-b bg-bg-dark"
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
