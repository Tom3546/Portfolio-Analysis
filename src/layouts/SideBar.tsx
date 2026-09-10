import { createContext, useState } from "react";
import { Link } from "react-router-dom";

import logoDark from "../assets/logo-dark.svg";
import SideBarItem from "../components/ui/SideBarItem";

import { ChevronsLeft } from "lucide-react";

import { LayoutDashboard } from "lucide-react";
import { ChartLine } from "lucide-react";
import { ChartPie } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";

function HorizontalRule() {
  return <hr className="w-full mt-3 mb-3 border-[hsl(0,0%,15%)]" />;
}

export const SideBarContext = createContext(true);

export default function SideBar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className="sticky flex flex-col h-screen p-3 gap-1 border-r
      border-[hsl(0,0%,15%)] bg-bg"
    >
      <div className="flex items-center justify-between w-full mt-5 mb-8 relative">
        <Link to="/">
          <img
            src={logoDark}
            alt="logo"
            className={`absolute top-0 left-4 h-10 transition-all  
              ${
                expanded
                  ? "delay-300 duration-500"
                  : "pointer-events-none opacity-0 duration-300 -translate-x-4"
              }`}
          />
        </Link>
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="flex items-center justify-center h-10 w-10 mr-1 rounded-full  bg-bg-light 
          hover:cursor-pointer hover:brightness-110 transition-all duration-200"
        >
          <ChevronsLeft
            className={`w-5 h-5 transition-transform duration-300 ${
              expanded ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      </div>

      <SideBarContext value={expanded}>
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
      </SideBarContext>
    </aside>
  );
}
