import { Bell, Search, Flame } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-slate-800">

      <div>
        <h1 className="text-3xl font-bold">
          Good Afternoon, Anjali 👋
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

          A

        </div>

      </div>

    </header>
  );
}