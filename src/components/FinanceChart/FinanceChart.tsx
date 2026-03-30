import { BarChart, Bar, XAxis, LabelList } from "recharts";

type FinanceChartProps = {
  data: { name: string; value: number }[];
};
export default function FinanceChart({ data }: FinanceChartProps) {
  const barsCount = data.length;

  const minChartWidth = 250;
  const spacePerBar = 90;

  const chartWidth =
    barsCount === 0
      ? minChartWidth
      : Math.max(minChartWidth, barsCount * spacePerBar);

  if (!barsCount) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          height: "450px",
          color: "#52555F",
        }}
      >
        Немає даних для відображення!
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <BarChart
        width={chartWidth}
        height={450}
        data={data}
        barCategoryGap="5%"
        margin={{ top: 40 }}
      >
        <XAxis
          dataKey="name"
          interval={0}
          axisLine={false}
          tickLine={false}
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
