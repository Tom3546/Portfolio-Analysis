import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { mockHistory } from "../../data/mockData";

function LineChartComponent() {
  return (
    <div className="p-4 w-full h-80 bg-bg ring ring-border">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={mockHistory}>
          <defs>
            {/* 1. Gradient pod wykresem (pionowy: góra -> dół) */}
            <linearGradient id="underLineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="15%"
                stopColor="var(--primary)"
                stopOpacity={0.35}
              />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            strokeDasharray="10 5"
            stroke="var(--border)"
          />
          <XAxis
            dataKey="time"
            stroke="var(--text-muted)"
            fontSize={12}
            minTickGap={25}
            padding={{ left: 1, right: 1 }}
            tickFormatter={(value) => {
              const [, month, day] = value.split("-");
              return `${day}.${month}`;
            }}
          />
          <YAxis
            stroke="var(--text-muted)"
            fontSize={12}
            width={"auto"}
            domain={["auto", "auto"]}
            tickFormatter={(value) =>
              value ? `${(value / 1000).toFixed(0)}k` : value
            }
            tickLine={false}
            axisLine={false}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--primary)"
            fill="url(#underLineGradient)"
            activeDot={{ stroke: "" }}
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function DashBoardCharts() {
  return <LineChartComponent />;
}
