"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";

export default function PomodoroPage() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
  let timer: NodeJS.Timeout;

  if (running && time > 0) {
    timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  }

  if (time === 0) {
    setRunning(false);

    alert(
      "Pomodoro Session Completed 🎉"
    );
  }

  return () => clearInterval(timer);
}, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
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

          {/* Stats */}

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-slate-400">
                Today's Focus
              </p>

              <h2 className="text-4xl font-bold mt-2">
                4.5h
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-slate-400">
                Current Streak
              </p>

              <h2 className="text-4xl font-bold mt-2">
                12 Days
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-slate-400">
                Focus Coins
              </p>

              <h2 className="text-4xl font-bold mt-2">
                420
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
    setTime(25 * 60);
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
  );
}