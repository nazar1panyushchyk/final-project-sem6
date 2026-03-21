import { BarChart, Bar, XAxis, LabelList } from "recharts";
import { expensesChart } from "../ChartData/chartData";

export default function ExpensesChart() {
  return (
    <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
      <BarChart
        width={900}
        height={450}
        data={expensesChart}
        barCategoryGap="10%"
      >
        {/* axisLine={false} прибирає лінію, tickLine={false} прибирає засічки */}
        <XAxis
          dataKey="name"
          interval={0}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#52555F", fontSize: 14 }} // Стилізація тексту категорій
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
