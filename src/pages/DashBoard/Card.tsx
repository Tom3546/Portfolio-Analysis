import {
  type LucideIcon,
  TrendingUp,
  TrendingDown,
  MoveRight,
} from "lucide-react";

export type Trend = "positive" | "negative" | "neutral";

const TrendConfig: Record<Trend, { icon: LucideIcon; color: string }> = {
  positive: { icon: TrendingUp, color: "text-positive" },
  negative: { icon: TrendingDown, color: "text-negative" },
  neutral: { icon: MoveRight, color: "text-neutral" },
};

interface CardProps {
  title: string;
  icon: LucideIcon;
  value: string;
  change?: string;
  trend?: Trend;
}

export default function Card({
  title,
  icon: Icon,
  value,
  change,
  trend,
}: CardProps) {
  const { icon: TrendIcon, color } = trend ? TrendConfig[trend] : {};

  return (
    <div
      className="h-40 p-7 bg-bg ring-1 ring-border rounded-md 
      transition-colors duration-200"
    >
      <div className="flex items-center justify-start gap-3 w-full text-xl">
        <div className="grid place-items-center w-10 h-10 rounded-md bg-bg-light ">
          <Icon />
        </div>
        <span>{title}</span>
      </div>
      <div className="">{value}</div>
      {TrendIcon && change && (
        <div className="">
          <TrendIcon />
        </div>
      )}
    </div>
  );
}
