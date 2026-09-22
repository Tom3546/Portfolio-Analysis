import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main
      className="flex min-h-screen w-full bg-bg-dark text-text 
      transition-colors duration-200"
    >
      <SideBar />
      <div className="flex-1 min-w-0">
        <TopBar />
        <Outlet />
      </div>
    </main>
  );
}

export default RootLayout;
