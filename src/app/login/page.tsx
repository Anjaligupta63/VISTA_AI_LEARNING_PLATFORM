import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            VISTA
          </h1>

          <p className="text-slate-400 mt-3">
            Welcome Back
          </p>

        </div>

        <div className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          />

          <button className="w-full p-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
            Login
          </button>

        </div>

        <div className="mt-6 text-center">

          <Link
            href="/signup"
            className="text-indigo-400"
          >
            Don't have an account? Sign Up
          </Link>

        </div>

      </div>

    </div>
  );
}