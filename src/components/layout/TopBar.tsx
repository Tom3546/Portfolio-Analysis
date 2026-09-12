import ThemeToggle from "../ui/ThemeToggle";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between w-full h-18 p-4">
      <div className="">
        <h1>PlaceHolder</h1>
      </div>
      <ThemeToggle />
    </div>
  );
}
