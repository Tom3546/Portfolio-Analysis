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
      className="flex flex-col justify-between items-between h-36 px-6 py-7 ring-1 ring-border
      bg-bg transition-colors duration-200"
    >
      <div className="flex justify-between w-full">
        <span>{title}</span>
        <Icon />
      </div>
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-2xl text-">{value}</span>
        {sideValue && (
          <div
            className={`flex items-center ${sideTrend ? "text-positive" : "text-negative"}`}
          >
            <span className="w-5 pb-1 flex items-center">
              {sideTrend ? (
                <ChevronUp strokeWidth="2.3" />
              ) : (
                <ChevronDown strokeWidth="2.3" />
              )}
            </span>
            <span className="text-sm">{sideValue}</span>
          </div>
        )}
      </div>

      <div
        className={`flex items-center gap-2 ${TrendIcon ? color : "text-text-muted"}`}
      >
        {TrendIcon && <TrendIcon strokeWidth="1.5" />}
        <span className="text-sm">{subValue}</span>
      </div>
    </div>
  );
}
