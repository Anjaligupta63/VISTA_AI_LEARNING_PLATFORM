import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <GraduationCap className="text-indigo-500" />

          <h1 className="font-bold text-xl">
            VISTA
          </h1>
        </Link>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#features">Features</a>
          <a href="#courses">Courses</a>
          <a href="#analytics">Analytics</a>
          <a href="#about">About</a>
        </div>

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="px-5 py-2 rounded-xl border border-slate-700 hover:border-indigo-500 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}