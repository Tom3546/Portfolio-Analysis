import {
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronUp,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

export type Trend = "positive" | "negative" | "neutral";

const TrendConfig: Record<Trend, { icon: LucideIcon; color: string }> = {
  positive: { icon: TrendingUp, color: "text-positive" },
  negative: { icon: TrendingDown, color: "text-negative" },
  neutral: { icon: Minus, color: "text-text-muted" },
};

interface CardProps {
  title: string;
  icon: LucideIcon;
  value: string;
  subValue?: string;
  subTrend?: Trend;
  sideValue?: string;
  sideTrend?: boolean;
}

export default function Card({
  title,
  icon: Icon,
  value,
  subValue,
  subTrend,
  sideValue,
  sideTrend,
}: CardProps) {
  const { icon: TrendIcon, color } = subTrend ? TrendConfig[subTrend] : {};

  return (
    <div
      className="h-40 p-7 bg-bg ring-1 ring-border rounded-md 
      transition-colors duration-200"
    >
      <div className="flex items-center justify-between gap-3 w-full text-xl">
        <span>{title}</span>
        <Icon />
      </div>
      <div className="">
        <span>{value} </span>
        {sideValue && (
          <div
            className={`flex ${sideTrend ? "text-positive" : "text-negative"}`}
          >
            <span className="w-5 pb-1 flex items-center">
              {sideTrend ? (
                <ChevronUp strokeWidth="2.3" />
              ) : (
                <ChevronDown strokeWidth="2.3" />
              )}
            </span>
            <span>{sideValue}</span>
          </div>
        )}
      </div>

      {TrendIcon ? (
        <div className={`flex gap-2 ${color}`}>
          <TrendIcon strokeWidth="1.5" />
          <span>{subValue}</span>
        </div>
      ) : (
        <span>{subValue}</span>
      )}
    </div>
  );
}
