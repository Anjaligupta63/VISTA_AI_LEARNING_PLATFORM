"use client";
import AuthGuard from "@/components/AuthGuard";
import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  const [stats, setStats] = useState({
    completedCourses: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("http://localhost:5000/api/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:5000/api/user/profile-stats",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AuthGuard>
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <MobileNavbar />

        <main className="p-8">
          <h1 className="text-4xl font-bold">
            Profile
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your account and learning progress
          </p>

          {/* Profile Card */}

          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-28 h-28 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-4xl font-bold">
                {user?.name
                  ? user.name
                      .charAt(0)
                      .toUpperCase()
                  : "U"}
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  {user?.name || "User"}
                </h2>

                <p className="text-slate-400 mt-2">
                  {user?.email ||
                    "No Email"}
                </p>

                <div className="mt-4 inline-block px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                  Explorer
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Courses Completed
              </h3>

              <p className="text-4xl font-bold mt-3">
                {
                  stats.completedCourses
                }
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Focus Hours
              </h3>

              <p className="text-4xl font-bold mt-3">
                Coming Soon
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Quiz Accuracy
              </h3>

              <p className="text-4xl font-bold mt-3">
                Coming Soon
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Current Streak
              </h3>

              <p className="text-4xl font-bold mt-3">
                Coming Soon
              </p>
            </div>
          </div>

          {/* Achievements */}

          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Recent Achievements
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900 rounded-2xl p-5">
                🏅 First Course Completed
              </div>

              <div className="bg-slate-900 rounded-2xl p-5">
                🔥 7-Day Streak
              </div>

              <div className="bg-slate-900 rounded-2xl p-5">
                🧠 Quiz Master
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </AuthGuard>
  );
}