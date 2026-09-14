export type AssetsCategory =
  | "stock"
  | "etf"
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
}

export interface PortfolioSummary {
  totalValue: number;
  totalProfitLoss: number;
  rateOfReturn: number;
  annualizedReturn: number;
  dailyProfitLoss: number;
  dailyChangePercentage: number;
}

export interface ChartPoint {
  date: string; // or Date depending on python api
  value: number;
}
