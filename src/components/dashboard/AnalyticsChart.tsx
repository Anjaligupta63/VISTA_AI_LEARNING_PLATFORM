"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AnalyticsChart() {
  const [data, setData] =
    useState([]);

  useEffect(() => {
    fetchChart();
  }, []);

  const fetchChart = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await api.get(
        "/dashboard/focus-chart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-8">
      <h2 className="text-xl font-bold mb-6">
        Weekly Focus Hours
      </h2>

      <div className="h-75">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
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