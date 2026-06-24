"use client";

import AuthGuard from "@/components/AuthGuard";
import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import api from "@/lib/api";

export default function AchievementsPage() {
  const [achievements, setAchievements] =
    useState<any[]>([]);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await api.get(
            "/achievements",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        setAchievements(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <AuthGuard>

      <div className="flex min-h-screen bg-slate-950 text-white">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Achievements
          </h1>

          {achievements.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              No achievements found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">

              {achievements.map(
                (
                  achievement,
                  index
                ) => (
                  <div
                    key={index}
                    className={`rounded-3xl p-6 border ${
                      achievement.unlocked
                        ? "bg-green-500/10 border-green-500/30"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <h2 className="text-xl font-bold">

                      {achievement.unlocked
                        ? "🏆"
                        : "🔒"}{" "}

                      {
                        achievement.title
                      }

                    </h2>

                    <p className="text-slate-400 mt-2">

                      Status:{" "}

                      {achievement.unlocked
                        ? "Unlocked"
                        : "Locked"}

                    </p>

                  </div>
                )
              )}

            </div>
          )}

        </div>

      </div>

    </AuthGuard>
  );
}