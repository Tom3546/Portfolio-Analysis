import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="flex h-screen w-screen bg-bg-dark text-text overflow-hidden">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <Outlet />
      </div>
    </main>
  );
}

export default RootLayout;
