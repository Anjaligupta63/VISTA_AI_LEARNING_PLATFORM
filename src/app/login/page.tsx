"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async () => {
  try {
    const res = await api.post(
      "/auth/login",
      {
        email,
        password,
      }
    );

    console.log(
      "LOGIN RESPONSE:",
      res.data
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    const savedToken =
      localStorage.getItem(
        "token"
      );

    alert(
      `Token Saved: ${savedToken ? "YES" : "NO"}`
    );

    router.push("/dashboard");
  } catch (error: any) {
    console.log(error);

    alert(
      error?.response?.data?.message ||
        "Login Failed"
    );
  }
};
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
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full p-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
          >
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