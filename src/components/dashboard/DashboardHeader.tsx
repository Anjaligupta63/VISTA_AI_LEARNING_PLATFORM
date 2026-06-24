"use client";

import { Bell, Search, Flame } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [user, setUser] = useState<any>(null);

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
  }, []);

  return (
    <header className="flex items-center justify-between p-6 border-b border-slate-800">
      <div>
        <h1 className="text-3xl font-bold">
          Good Afternoon, {user?.name || "User"} 👋
        </h1>

        <p className="text-slate-400 mt-1">
          Keep learning and stay consistent.
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
          <Search size={18} />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

        {/* Streak */}
        <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-xl">
          <Flame size={18} />
          <span>14 Days</span>
        </div>

        {/* Notification */}
        <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">
          <Bell size={20} />
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 flex items-center justify-center font-bold">
          {user?.name
            ? user.name.charAt(0).toUpperCase()
            : "U"}
        </div>
      </div>
    </header>
  );
}