"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import CreatePathModal from "@/components/courses/CreatePathModal";
import CourseCard from "@/components/courses/CourseCard";

import api from "@/lib/api";

type Course = {
  id: number;
  title: string;
  description: string;
  progress: number;
  videoUrl?: string;
};

export default function CoursesPage() {
  const [courses, setCourses] =
    useState<Course[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      const res = await api.get(
        "/courses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourses(res.data);
    } catch (error) {
      console.log(error);

      alert(
        "Failed to load courses"
      );
    } finally {
      setLoading(false);
    }
  };

  const getCourseThumbnail = (
    title: string
  ) => {
    const name =
      title.toLowerCase();

    if (
      name.includes("dsa") ||
      name.includes("algorithm")
    ) {
      return "https://images.unsplash.com/photo-1515879218367-8466d910aaa4";
    }

    if (
      name.includes("dbms") ||
      name.includes("database")
    ) {
      return "https://images.unsplash.com/photo-1544383835-bda2bc66a55d";
    }

    if (
      name.includes("system")
    ) {
      return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31";
    }

    if (
      name.includes("react")
    ) {
      return "https://images.unsplash.com/photo-1633356122544-f134324a6cee";
    }

    if (
      name.includes("node")
    ) {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c";
    }

    if (
      name.includes("java")
    ) {
      return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97";
    }

    if (
      name.includes("web")
    ) {
      return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6";
    }

    return "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  };

  const filteredCourses =
    courses.filter((course) =>
      course.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading Courses...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              My Courses
            </h1>

            <p className="text-slate-400 mt-2">
              Organize your learning journey
            </p>
          </div>

          <CreatePathModal />

        </div>

        <div className="mb-8">

          <input
            type="text"
            placeholder="Search Courses..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full md:w-96 p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          />

        </div>

        {courses.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <h2 className="text-2xl font-bold">
              No Courses Yet
            </h2>

            <p className="text-slate-400 mt-3">
              Create your first learning path.
            </p>

          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <h2 className="text-2xl font-bold">
              No Matching Courses
            </h2>

            <p className="text-slate-400 mt-3">
              Try another search.
            </p>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredCourses.map(
              (course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={
                    course.title
                  }
                  description={
                    course.description
                  }
                  progress={
                    course.progress
                  }
                  videoUrl={
                    course.videoUrl
                  }
                  thumbnail={getCourseThumbnail(
                    course.title
                  )}
                />
              )
            )}

          </div>
        )}

      </main>

    </div>
  );
}