import { Link } from "react-router-dom";
import logoDark from "../assets/Union.svg";
import SideBarItem from "../components/ui/SideBarItem";

import { ChevronsLeft } from "lucide-react";
/* import { ChevronsRight } from "lucide-react"; */

import { LayoutDashboard } from "lucide-react";
import { ChartLine } from "lucide-react";
import { ChartPie } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";

function HorizontalRule() {
  return <hr className="w-full mt-3 mb-3 border-[hsl(0,0%,15%)]" />;
}

export default function SideBar() {
  return (
    <aside
      className="sticky flex flex-col items-center h-screen w-64 p-4 gap-1 border-r
      border-[hsl(0,0%,15%)] bg-bg"
    >
      <div className="flex justify-between w-full mt-2 mb-8 pl-4 pr-2">
        <Link to="/">
          <img src={logoDark} alt="logo" className="w-12 h-12" />
        </Link>

        <button
          className="flex items-center justify-center h-10 w-10 p-2 rounded-full  bg-bg-light 
          hover:cursor-pointer hover:brightness-110 transition-all duration-200"
        >
          <ChevronsLeft />
        </button>
      </div>

      <SideBarItem icon={LayoutDashboard} label="Dashboard" to="/" end />
      <HorizontalRule />
      <SideBarItem icon={ChartLine} label="Performance" to="/performance" />
      <SideBarItem icon={ChartPie} label="Holdings" to="/holdings" />
      <SideBarItem
        icon={ArrowLeftRight}
        label="Transactions"
        to="/transactions"
      />
      <SideBarItem icon={HandCoins} label="Dividends" to="/dividends" />
    </aside>
  );
}
