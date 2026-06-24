"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  BookOpen,
  Clock3,
  Brain,
  BarChart3,
  User,
  Trophy,
  Sparkles,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

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

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");

    alert("Logged Out Successfully ✅");

    router.push("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      name: "Courses",
      icon: BookOpen,
      href: "/courses",
    },
    {
      name: "Pomodoro",
      icon: Clock3,
      href: "/pomodoro",
    },
    {
      name: "Notes",
      icon: Brain,
      href: "/notes",
    },
    {
      name: "Analytics",
      icon: BarChart3,
      href: "/analytics",
    },
    {
      name: "Motivation",
      icon: Sparkles,
      href: "/motivation",
    },
    {
      name: "Achievements",
      icon: Trophy,
      href: "/achievements",
    },
    {
      name: "Profile",
      icon: User,
      href: "/profile",
    },
  ];

  return (
    <aside className="hidden lg:flex w-72 min-h-screen border-r border-slate-800 bg-slate-900/60 backdrop-blur-xl flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          VISTA
        </h1>

        <p className="text-xs text-slate-500 mt-1">
          Learn • Focus • Grow
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                    : "hover:bg-indigo-500/10 hover:text-indigo-400"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-white/5 rounded-2xl p-4">
          <h3 className="font-semibold">
            {user?.name || "User"}
          </h3>

          <p className="text-sm text-slate-400">
            Explorer
          </p>

          <div className="w-full bg-slate-800 h-2 rounded-full mt-3">
            <div className="w-[72%] h-2 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-full" />
          </div>

          <button
            onClick={handleLogout}
            className="w-full mt-5 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}