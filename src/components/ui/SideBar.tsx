import logoDark from "../../assets/Union.svg";
import { LayoutDashboard } from "lucide-react";
import { ChevronsLeft } from "lucide-react";
/* import { ChevronsRight } from "lucide-react"; */

function HorizontalRule() {
  return <hr className="w-full mt-2 mb-2 border-[hsl(0,0%,15%)]" />;
}

export default function SideBar() {
  return (
    <aside
      className="sticky flex flex-col items-center h-screen w-64 p-4 gap-4 
    rounded-xl border border-[hsl(0,0%,8%)] bg-bg"
    >
      <div className="flex justify-between w-full mt-2 mb-8 pl-4 pr-2">
        {/* TODO: router <Link to="/dashboard"></Link> */}
        <img
          src={logoDark}
          alt="logo"
          className="w-12 h-12 hover:cursor-pointer"
        />
        <button
          className="flex items-center justify-center h-10 w-10 p-2 
        rounded-full  bg-bg-light hover:cursor-pointer hover:brightness-110 transition-all duration-200"
        >
          <ChevronsLeft />
        </button>
      </div>
      <button
        type="button"
        className="flex items-center w-full p-3 pl-4 gap-4 rounded-md text-bg
        bg-primary hover:cursor-pointer hover:brightness-110 transition-all duration-200"
      >
        <LayoutDashboard className="w-6" />
        {/*https://lottie.host/embed/87a425bb-8b4f-43f8-bd90-8962e030a8b8/f8GgDO1iBK.lottie*/}
        <span>Dashboard</span>
      </button>
      <HorizontalRule />
    </aside>
  );
}
