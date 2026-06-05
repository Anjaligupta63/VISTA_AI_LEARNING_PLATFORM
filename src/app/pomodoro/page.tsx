"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

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

    return () => clearInterval(timer);
  }, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Focus Timer
        </h1>

        <p className="text-slate-400 mt-2">
          Stay focused and improve productivity
        </p>

        <div className="mt-10 max-w-xl mx-auto">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <h2 className="text-7xl font-bold mb-8">

              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}

            </h2>

            <div className="flex justify-center gap-4">

              <button
                onClick={() => setRunning(true)}
                className="px-6 py-3 rounded-xl bg-green-600"
              >
                Start
              </button>

              <button
                onClick={() => setRunning(false)}
                className="px-6 py-3 rounded-xl bg-yellow-600"
              >
                Pause
              </button>

              <button
                onClick={() => {
                  setRunning(false);
                  setTime(25 * 60);
                }}
                className="px-6 py-3 rounded-xl bg-red-600"
              >
                Reset
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}