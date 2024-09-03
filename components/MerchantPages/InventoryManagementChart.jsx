import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "M", openingStock: 30, closingStock: 50 },
  { day: "T", openingStock: 20, closingStock: 40 },
  { day: "W", openingStock: 50, closingStock: 70 },
  { day: "T", openingStock: 40, closingStock: 60 },
  { day: "F", openingStock: 10, closingStock: 30 },
  { day: "S", openingStock: 60, closingStock: 80 },
  { day: "S", openingStock: 30, closingStock: 50 },
];

const InventoryManagementChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 10, left: -30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[0, 80]}
          ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]}
        />
        <YAxis type="category" dataKey="day" />
        <Tooltip />
        <Legend />
        {/* two bars for Opening and Closing Stock */}
        <Bar
          dataKey="openingStock"
          fill="#009CFF"
          name="Opening Stock"
          radius={[0, 10, 10, 0]}
        />
        <Bar
          dataKey="closingStock"
          fill="#F90808"
          name="Closing Stock"
          radius={[0, 10, 10, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default InventoryManagementChart;
