import { NavLink } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

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
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative flex items-center w-full p-3 pl-4 gap-4 rounded-md hover:cursor-pointer 
        hover:bg-bg-light transition-all duration-200
      ${isActive ? "text-primary" : "text-text"}`
      }
    >
      <Icon className="w-6" />
      <span>{label}</span>
    </NavLink>
  );
}
