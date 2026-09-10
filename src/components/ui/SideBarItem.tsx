import { NavLink } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import { useContext } from "react";
import { SideBarContext } from "../../layouts/SideBar";

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
        transition-all duration-200
        ${isActive ? "text-primary bg-primary/15" : "text-text hover:bg-bg-light"}`
      }
    >
      <Icon className="w-6" />
      <span
        className={`overflow-hidden transition-all duration-800 ease-in-out ${expanded ? "w-56 ml-4" : "w-0 opacity-0"}`}
      >
        {label}
      </span>
    </NavLink>
  );
}
