"use client";
import AuthGuard from "@/components/AuthGuard";
import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";
import api from "@/lib/api";

export default function PomodoroPage() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  const [sessionMinutes, setSessionMinutes] =
    useState(25);

  const [stats, setStats] = useState({
    focusHours: "0.0",
    focusCoins: 0,
    sessionsCount: 0,
  });

  const fetchStats = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await api.get(
        "/dashboard/pomodoro-stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveSession = async () => {
    try {
      const token =
        localStorage.getItem("token");

      await api.post(
        "/pomodoro/save",
        {
          duration: sessionMinutes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchStats();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setRunning(false);

      saveSession();

      alert(
        "Pomodoro Session Completed 🎉"
      );
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <MobileNavbar />

        <main className="p-8">

          <h1 className="text-4xl font-bold">
            Pomodoro Focus System
          </h1>

          <p className="text-slate-400 mt-2">
            Improve productivity with focused study sessions.
          </p>

          {/* Dynamic Stats */}

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <p className="text-slate-400">
                Total Focus Hours
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stats.focusHours}h
              </h2>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <p className="text-slate-400">
                Completed Sessions
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stats.sessionsCount}
              </h2>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <p className="text-slate-400">
                Focus Coins
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stats.focusCoins}
              </h2>

            </div>

          </div>

          {/* Timer */}

          <div className="max-w-2xl mx-auto mt-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

              <div className="w-72 h-72 mx-auto rounded-full border-10 border-indigo-500 flex items-center justify-center">

                <h2 className="text-7xl font-bold">

                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}

                </h2>

              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-10">

                <button
                  onClick={() => {
                    if (!running) {
                      setRunning(true);
                    }
                  }}
                  className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 transition"
                >
                  Start
                </button>

                <button
                  onClick={() =>
                    setRunning(false)
                  }
                  className="px-6 py-3 rounded-xl bg-yellow-600 hover:bg-yellow-500 transition"
                >
                  Pause
                </button>

                <button
                  onClick={() => {
                    setRunning(false);
                    setTime(
                      sessionMinutes * 60
                    );
                  }}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition"
                >
                  Reset
                </button>

              </div>

            </div>

          </div>

          {/* Modes */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <button
              onClick={() => {
                setRunning(false);
                setSessionMinutes(25);
                setTime(25 * 60);
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500"
            >
              <h3 className="text-xl font-bold">
                25 / 5
              </h3>

              <p className="text-slate-400 mt-2">
                Classic Pomodoro
              </p>
            </button>

            <button
              onClick={() => {
                setRunning(false);
                setSessionMinutes(50);
                setTime(50 * 60);
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500"
            >
              <h3 className="text-xl font-bold">
                50 / 10
              </h3>

              <p className="text-slate-400 mt-2">
                Deep Work Session
              </p>
            </button>

            <button
              onClick={() => {
                setRunning(false);
                setSessionMinutes(90);
                setTime(90 * 60);
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500"
            >
              <h3 className="text-xl font-bold">
                90 / 15
              </h3>

              <p className="text-slate-400 mt-2">
                Intensive Focus
              </p>
            </button>

          </div>

        </main>

      </div>

    </div>
    </AuthGuard>
  );
}