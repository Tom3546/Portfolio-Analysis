import KpiSection from "./KpiSection";
import DashBoardCharts from "./DashBoardCharts";

export default function DashBoard() {
  return (
    <div className="flex flex-col max-w-screen-2xl gap-6 p-6 max-md:p-4 mx-auto">
      <KpiSection />
      <DashBoardCharts />
    </div>
  );
}
