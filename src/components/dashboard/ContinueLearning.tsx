"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";

type Course = {
  id: number;
  title: string;
  progress: number;
};

export default function ContinueLearning() {
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/dashboard/progress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.length > 0) {
        const sorted = [...res.data].sort(
          (a, b) => b.progress - a.progress
        );

        setCourse(sorted[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!course) {
    return (
      <div className="bg-linear-to-r from-indigo-600/20 to-cyan-600/20 border border-indigo-500/20 rounded-3xl p-6">
        <h2 className="text-2xl font-bold">
          Continue Learning
        </h2>

        <p className="text-slate-400 mt-3">
          No courses yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-r from-indigo-600/20 to-cyan-600/20 border border-indigo-500/20 rounded-3xl p-6">

      <h2 className="text-2xl font-bold">
        Continue Learning
      </h2>

      <p className="text-slate-400 mt-2">
        {course.title}
      </p>

      <div className="mt-4">

        <div className="flex justify-between mb-2">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        <div className="w-full bg-slate-800 h-3 rounded-full">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
            style={{
              width: `${course.progress}%`,
            }}
          />
        </div>

      </div>

      <Link href={`/courses/${course.id}`}>
        <button className="mt-5 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500">
          Resume Course
        </button>
      </Link>

    </div>
  );
}