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

const datas = [
  { day: "Mon", value: 10 },
  { day: "Tues", value: 20 },
  { day: "Wed", value: 30 },
  { day: "Thurs", value: 25 },
  { day: "Fri", value: 35 },
  { day: "Sat", value: 15 },
  { day: "Sun", value: 5 },
];



const DailyActiveBuyersChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 10, left: -25, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis  />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#7B61FF"
          strokeWidth={2.5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DailyActiveBuyersChart;
