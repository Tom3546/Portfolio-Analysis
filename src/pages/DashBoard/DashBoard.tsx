import Card, { type Trend } from "./Card";
import { mockSummary } from "../../data/mockData";

import { WalletMinimal, ChartNoAxesCombined } from "lucide-react";
const getTrend = (value: number): Trend => {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "neutral";
};

export default function DashBoard() {
  return (
    <div className="max-w-7xl gap-4 p-6 max-md:p-4 mx-auto">
      {/*or: max-w-screen-2xl*/}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card
          title="Wartość Portfela"
          icon={WalletMinimal}
          value={`${mockSummary.totalValue.toLocaleString("pl-PL")} PLN`}
        />
        <Card
          title="Zysk całkowity"
          icon={ChartNoAxesCombined}
          value={`${mockSummary.totalProfitLoss.toLocaleString("pl-PL")} PLN`}
          change={`${mockSummary.dailyChangePercentage}%`}
          trend={getTrend(mockSummary.dailyChangePercentage)}
        />
      </div>
    </div>
  );
}
