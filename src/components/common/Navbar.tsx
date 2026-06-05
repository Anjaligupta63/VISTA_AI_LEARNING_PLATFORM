import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="flex items-center gap-2">
          <GraduationCap className="text-indigo-500" />
          <h1 className="font-bold text-xl">
            VISTA
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#">Features</a>
          <a href="#">Courses</a>
          <a href="#">Analytics</a>
          <a href="#">About</a>
        </div>

        <button className="px-5 py-2 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}