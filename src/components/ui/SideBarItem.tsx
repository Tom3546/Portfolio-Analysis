import { type LucideIcon } from "lucide-react";

export interface SideBarItemProps {
  icon: LucideIcon;
  label: string;
}

export default function SideBarItem({ icon: Icon, label }: SideBarItemProps) {
  return (
    <>
      <button
        type="button"
        className="flex items-center w-full p-3 pl-4 gap-4 rounded-md text-text hover:cursor-pointer 
        hover:bg-bg-light transition-all duration-200"
      >
        <Icon className="w-6" />
        <span>{label}</span>
      </button>
    </>
  );
}
