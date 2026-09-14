import {
  type Asset,
  type PortfolioSummary,
  type ChartPoint,
} from "../types/portfolio";

export const mockSummary: PortfolioSummary = {
  totalValue: 185420.5,
  totalProfitLoss: 31200.8,
  rateOfReturn: 20.23,
  annualizedReturn: 9.45,
  dailyProfitLoss: -620.4,
  dailyChangePercentage: -0.33,
};

export const mockAssets: Asset[] = [
  {
    id: "1",
    ticker: "CDR.WA",
    name: "CD Projekt S.A.",
    category: "stock",
    currency: "PLN",
    quantity: 150,
    avgPurchasePrice: 120.0,
    currentPrice: 165.4,
    allocationPercent: 13.38,
  },
  {
    id: "2",
    ticker: "VWCE.DE",
    name: "Vanguard FTSE All-World UCITS ETF",
    category: "etf",
    currency: "EUR",
    quantity: 200,
    avgPurchasePrice: 98.5,
    currentPrice: 121.8,
    allocationPercent: 52.55,
  },
  {
    id: "3",
    ticker: "BTC-USD",
    name: "Bitcoin",
    category: "crypto",
    currency: "USD",
    quantity: 0.25,
    avgPurchasePrice: 52000.0,
    currentPrice: 64500.0,
    allocationPercent: 19.8,
  },
  {
    id: "4",
    ticker: "EDO1034",
    name: "Obligacje Skarbowe EDO (10-letnie)",
    category: "bond",
    currency: "PLN",
    quantity: 100,
    avgPurchasePrice: 100.0,
    currentPrice: 108.5,
    allocationPercent: 5.85,
  },
  {
    id: "5",
    // Bez tikkera – lokata bankowa
    name: "Lokata Bankowa 6%",
    category: "deposit",
    currency: "PLN",
    quantity: 1,
    avgPurchasePrice: 10000.0,
    currentPrice: 10600.0,
    allocationPercent: 5.72,
  },
  {
    id: "6",
    // Bez tikkera – gotówka
    name: "Konto Oszczędnościowe PLN",
    category: "cash",
    currency: "PLN",
    quantity: 5000,
    avgPurchasePrice: 1.0,
    currentPrice: 1.0,
    allocationPercent: 2.7,
  },
];

export const mockHistory: ChartPoint[] = [
  { date: "2026-01-01", value: 154200.0 },
  { date: "2026-02-01", value: 159800.5 },
  { date: "2026-03-01", value: 157300.0 },
  { date: "2026-04-01", value: 168400.2 },
  { date: "2026-05-01", value: 174900.0 },
  { date: "2026-06-01", value: 171200.8 },
  { date: "2026-07-01", value: 182100.0 },
  { date: "2026-08-01", value: 186040.9 },
  { date: "2026-09-01", value: 185420.5 },
];
