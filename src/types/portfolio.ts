export type AssetsCategory =
  | "stock"
  | "etf"
  | "reit"
  | "crypto"
  | "cash"
  | "bond"
  | "deposit";

export interface Asset {
  id: string;
  ticker?: string;
  name: string;
  category: AssetsCategory;
  currency: string; // to do: add type  and exchange rate
  quantity: number;
  avgPurchasePrice: number;
  currentPrice: number;
  allocationPercent: number;
  YieldOnCost?: number;
}

export interface PortfolioSummary {
  totalValue: number;
  openPositions: number;
  totalProfitLoss: number;
  totalReturn: number;
  dailyProfitLoss: number;
  dailyChangePercentage: number;
  rateOfReturn: number;
  xirr: number;
  annualPassiveIncome: number;
  passiveIncomeYoYChange: number;
  monthlyPassiveIncome: number;
}

export interface ChartPoint {
  date: string; // or Date depending on python api
  value: number;
}
