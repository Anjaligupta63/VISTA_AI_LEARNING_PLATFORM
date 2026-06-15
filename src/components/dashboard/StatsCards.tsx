"use client";

import { useEffect, useState } from "react";

import {
  BookOpen,
  FileText,
  Brain,
  Layers,
  TrendingUp,
} from "lucide-react";

import api from "@/lib/api";
import ProgressChart from "./ProgressChart";

export default function StatsCards() {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalNotes: 0,
    totalQuizzes: 0,
    totalFlashcards: 0,
    averageProgress: 0,
  });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token =
        localStorage.getItem("token");

      console.log(
        "Dashboard Token:",
        token
      );

      const res = await api.get(
        "/dashboard/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(
        "Dashboard Stats:",
        res.data
      );

      setStats(res.data);
    } catch (error: any) {
      console.log(
        "Dashboard Error:",
        error?.response?.data
      );
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Courses",
      value: stats.totalCourses,
      icon: BookOpen,
    },
    {
      title: "Notes",
      value: stats.totalNotes,
      icon: FileText,
    },
    {
      title: "Quizzes",
      value: stats.totalQuizzes,
      icon: Brain,
    },
    {
      title: "Flashcards",
      value: stats.totalFlashcards,
      icon: Layers,
    },
    {
      title: "Avg Progress",
      value: `${stats.averageProgress}%`,
      icon: TrendingUp,
    },
  ];

  if (loading) {
    return (
      <div className="text-center text-slate-400">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between">

                <p className="text-slate-400">
                  {card.title}
                </p>

                <div className="p-3 rounded-xl bg-indigo-500/10">
                  <Icon
                    size={20}
                    className="text-indigo-400"
                  />
                </div>

              </div>

              <h2 className="text-4xl font-bold mt-5">
                {card.value}
              </h2>

            </div>
          );
        })}

      </div>

      <ProgressChart
        courses={stats.totalCourses}
        notes={stats.totalNotes}
        quizzes={stats.totalQuizzes}
        flashcards={stats.totalFlashcards}
      />

    </div>
  );
}