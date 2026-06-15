"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

type Course = {
  id: number;
  title: string;
  progress?: number;
};

export default function RecentActivity() {
  const [activities, setActivities] =
    useState<Course[]>([]);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    try {
      const token =
        localStorage.getItem("token");

      console.log("TOKEN:", token);

      const res = await api.get(
        "/dashboard/activity",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(
        "ACTIVITY RESPONSE:",
        res.data
      );

      setActivities(res.data);
    } catch (error: any) {
      console.log(
        "ACTIVITY ERROR:",
        error?.response?.data
      );

      console.log(error);
    }
  };

  return (
  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

    <h2 className="text-xl font-bold mb-4">
      Recent Activity
    </h2>

    <div className="space-y-4 text-slate-300">

      {activities.length === 0 ? (
        <p className="text-slate-400">
          No activity found.
        </p>
      ) : (
        activities.map((course) => (
          <div
            key={course.id}
            className="p-4 rounded-xl bg-white/5 border border-white/10"
          >

            <div className="flex justify-between items-center">

              <p className="font-medium">
                📚 {course.title}
              </p>

              {course.progress === 100 && (
                <span className="text-green-400 text-sm font-semibold">
                  ✅ Completed
                </span>
              )}

            </div>

            <p className="text-sm text-slate-400 mt-2">
              Progress: {course.progress ?? 0}%
            </p>

            <div className="w-full bg-slate-800 h-2 rounded-full mt-3">

              <div
                className="h-2 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500"
                style={{
                  width: `${course.progress ?? 0}%`,
                }}
              />

            </div>

          </div>
        ))
      )}

    </div>

  </div>
);
  
}