"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 8 },
  { day: "Sun", hours: 7 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-8">
      <h2 className="text-xl font-bold mb-6">
        Weekly Focus Hours
      </h2>

      <div className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="hours"
              stroke="#6366F1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}