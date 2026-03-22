import { BarChart, Bar, XAxis, LabelList } from "recharts";
import { incomeChart } from "../ChartData/chartData";

export default function IncomeChart() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <BarChart
        width={900}
        height={450}
        data={incomeChart}
        barCategoryGap="10%"
        margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="name"
          interval={0}
          axisLine={false}
          tickLine={false}
          padding={{ left: 300, right: 300 }}
          tick={{ fill: "#52555F", fontSize: 14 }}
        />

        <Bar
          dataKey="value"
          barSize={40}
          shape={(props: any) => {
            const { x, y, width, height, index } = props;
            const fill = index % 3 === 0 ? "#FF751D" : "#FFD8BF";
            const radius = 10;

            const shiftX = 5;
            const adjustedWidth = width + shiftX;

            const path = `
                M${x},${y + height} 
                L${x},${y + radius} 
                Q${x},${y} ${x + radius},${y} 
                L${x + adjustedWidth - radius},${y} 
                Q${x + adjustedWidth},${y} ${x + adjustedWidth},${y + radius} 
                L${x + adjustedWidth},${y + height} 
                Z
            `;

            return <path d={path} fill={fill} />;
          }}
        >
          <LabelList
            dataKey="value"
            position="top"
            style={{ fill: "#808191", fontSize: 16, textAnchor: "middle" }}
            dy={-10}
            formatter={(value: any) =>
              value ? `${Number(value).toLocaleString()}\u00A0грн` : ""
            }
          />
        </Bar>
      </BarChart>
    </div>
  );
}
