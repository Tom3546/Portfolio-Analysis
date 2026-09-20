import Card, { type Trend } from "./Card";
import { mockSummary } from "../../data/mockData";
import { formatSign } from "../../utils/formatters";

import {
  WalletMinimal,
  ChartNoAxesCombined,
  Gauge,
  PiggyBank,
} from "lucide-react";

const formattedMockSummary = Object.fromEntries(
  Object.entries(mockSummary).map(([key, val]) => {
    return [key, val.toLocaleString("pl-PL")];
  }),
);

const getTrend = (val: number): Trend => {
  if (val > 0) return "positive";
  if (val < 0) return "negative";
  return "neutral";
};

console.log(formattedMockSummary);

export default function DashBoard() {
  return (
    <div className="max-w-screen-2xl gap-4 p-6 max-md:p-4 mx-auto">
      <div className="grid md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(max-content,1fr))] gap-4">
        <Card
          title="Wartość portfela"
          icon={WalletMinimal}
          value={`${formattedMockSummary.totalValue} PLN`}
          subValue={`Pozycje: ${formattedMockSummary.openPositions} PLN`}
        />
        <Card
          title="Zysk całkowity"
          icon={ChartNoAxesCombined}
          value={`${formatSign(mockSummary.totalProfitLoss)} PLN`}
          subValue={`${formatSign(mockSummary.dailyProfitLoss)}
          (${formatSign(mockSummary.dailyChangePercentage)}%)`}
          subTrend={getTrend(mockSummary.dailyChangePercentage)}
          sideValue={`${formattedMockSummary.totalReturn}%`}
          sideTrend={mockSummary.totalReturn > 0}
        />
        <Card
          title="Stopa zwrotu"
          icon={Gauge}
          value={`${formattedMockSummary.rateOfReturn}%`}
          subValue={`XIRR: ${formattedMockSummary.xirr}%`}
        />
        <Card
          title="Dochód pasywny"
          icon={PiggyBank}
          value={`${formattedMockSummary.passiveIncomeYield}%`}
          subValue={`~ ${formattedMockSummary.monthlyPassiveIncome} PLN / msc`}
          sideValue={`${formattedMockSummary.passiveIncomeYoYChange}%`}
          sideTrend={mockSummary.passiveIncomeYoYChange > 0}
        />
      </div>
    </div>
  );
}
