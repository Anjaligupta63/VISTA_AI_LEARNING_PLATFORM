"use client";

import { Menu } from "lucide-react";

export default function MobileNavbar() {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">

      <h1 className="text-2xl font-bold text-indigo-400">
        VISTA
      </h1>

      <button>
        <Menu size={28} />
      </button>

    </div>
  );
}