import SideBar from "./components/ui/SideBar";
import DashBoard from "./pages/DashBoard";
function App() {
  return (
    <main className="flex h-screen w-full p-2 gap-4 bg-bg-dark text-text overflow-hidden">
      <SideBar />
      <DashBoard />
    </main>
  );
}

export default App;
