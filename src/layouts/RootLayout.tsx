import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="flex h-screen w-full gap-4 bg-bg-dark text-text overflow-hidden">
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </main>
  );
}

export default RootLayout;
