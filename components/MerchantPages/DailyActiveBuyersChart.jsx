import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 10 },
  { day: "Tues", value: 20 },
  { day: "Wed", value: 30 },
  { day: "Thurs", value: 25 },
  { day: "Fri", value: 35 },
  { day: "Sat", value: 15 },
  { day: "Sun", value: 5 },
];

const DailyActiveBuyersChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 0, left: -30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis ticks={[0, 10, 20, 30, 40]} domain={[0, 40]} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#7B61FF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DailyActiveBuyersChart;
