import { NavLink } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import { useContext } from "react";
import SideBarContext from "../layout/SideBarContext";

export interface SideBarItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
  end?: boolean;
}

export default function SideBarItem({
  icon: Icon,
  label,
  to,
  end,
}: SideBarItemProps) {
  const expanded = useContext(SideBarContext);

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative flex items-center p-3 rounded-md hover:cursor-pointer 
        transition-all duration-200 group
        ${isActive ? "text-primary bg-primary/15" : "text-text hover:bg-bg-light"}`
      }
    >
      <Icon className="w-6" />
      <span
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          expanded ? "w-46 ml-4" : "w-0 opacity-0"
        }`}
      >
        {label}
      </span>

      {!expanded && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-6 bg-bg-light text-text-muted 
          text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible 
          group-hover:opacity-100 group-hover:translate-x-0 duration-100"
        >
          {label}
        </div>
      )}
    </NavLink>
  );
}
