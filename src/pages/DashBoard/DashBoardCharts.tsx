import { createChart, ColorType, AreaSeries } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { mockHistory } from "../../data/mockData";
import { getColor } from "../../utils/colors";

function LineChartComponent() {
  const lineChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineChartRef.current) return;

    const bgColor = getColor("--bg");
    const lineColor = getColor("--primary");
    const textColor = getColor("--text");
    const areaTopColor = getColor("--primary");

    const lineChart = createChart(lineChartRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: bgColor },
        textColor,
      },
      width: lineChartRef.current.clientWidth,
      height: 300,
    });
    lineChart.timeScale().fitContent();

    const newSeries = lineChart.addSeries(AreaSeries, {
      lineColor,
      topColor: areaTopColor,
    });

    newSeries.setData(mockHistory);

    return () => {
      lineChart.remove();
    };
  }, []);
  return <div ref={lineChartRef}></div>;
}

export default function DashBoardCharts() {
  return <LineChartComponent />;
}
