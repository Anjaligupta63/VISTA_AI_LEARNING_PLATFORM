import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <GraduationCap
            size={28}
            className="text-indigo-500"
          />

          <div>
            <h1 className="font-bold text-2xl">
              VISTA
            </h1>

            <p className="text-xs text-slate-500">
              Learn • Focus • Grow
            </p>
          </div>
        </Link>

        {/* Right Side */}
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
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}