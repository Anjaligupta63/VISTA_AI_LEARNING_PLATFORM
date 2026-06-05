"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Clock3,
  Brain,
  BarChart3,
  User,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

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
    <aside className="w-72 min-h-screen border-r border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-3xl font-extrabold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          VISTA
        </h1>

        <p className="text-xs text-slate-500 mt-1">
          Learn • Focus • Grow
        </p>

      </div>

      {/* Navigation */}

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
                }
                `}
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}

      </nav>

      {/* User Card */}

      <div className="p-4 border-t border-slate-800">

        <div className="bg-white/5 rounded-2xl p-4">

          <h3 className="font-semibold">
            Anjali Gupta
          </h3>

          <p className="text-sm text-slate-400">
            Level 12 Explorer
          </p>

          <div className="w-full bg-slate-800 h-2 rounded-full mt-3">

            <div className="w-[72%] h-2 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-full" />

          </div>

        </div>

      </div>

    </aside>
  );
}