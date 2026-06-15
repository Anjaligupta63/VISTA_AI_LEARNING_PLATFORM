"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await api.post("/auth/signup", {
        name,
        email,
        password,
      });

      console.log("Signup Success:", res.data);

      alert("Account created successfully ✅");

      router.push("/login");
    } catch (error: any) {
      console.log("Signup Error:", error);

      console.log(
        "Response:",
        error?.response?.data
      );

      alert(
        JSON.stringify(
          error?.response?.data ||
            "Signup failed"
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
      <div className="w-full max-w-md bg-white/5 p-8 rounded-3xl border border-white/10">
        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <button
          onClick={handleSignup}
          className="w-full p-3 rounded-lg bg-indigo-600 hover:bg-indigo-500"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}