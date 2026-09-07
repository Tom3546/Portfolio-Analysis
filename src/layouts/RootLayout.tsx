import SideBar from "./SideBar";
import DashBoard from "../pages/DashBoard";
function RootLayout() {
  return (
    <main className="flex h-screen w-full p-2 gap-4 bg-bg-dark text-text overflow-hidden">
      <SideBar />
      <DashBoard />
    </main>
  );
}

export default RootLayout;
