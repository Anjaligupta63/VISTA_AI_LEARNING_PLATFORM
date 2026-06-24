"use client";
import AuthGuard from "@/components/AuthGuard";
import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import api from "@/lib/api";

export default function AnalyticsPage() {
const [analytics, setAnalytics] = useState({
totalCourses: 0,
completedCourses: 0,
totalNotes: 0,
totalQuizzes: 0,
totalFlashcards: 0,
});

const [courses, setCourses] = useState<any[]>([]);

useEffect(() => {
fetchAnalytics();
fetchCourses();
}, []);

const fetchAnalytics = async () => {
try {
const token =
localStorage.getItem("token");


  const res = await api.get(
    "/dashboard/analytics",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  setAnalytics(res.data);
} catch (error) {
  console.log(error);
}


};

const fetchCourses = async () => {
try {
const token =
localStorage.getItem("token");


  const res = await api.get(
    "/dashboard/course-progress",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  setCourses(res.data);
} catch (error) {
  console.log(error);
}


};

return ( <AuthGuard>
  <div className="flex min-h-screen bg-slate-950 text-white"> <Sidebar />


  <div className="flex-1">
    <MobileNavbar />

    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Analytics Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Track learning performance and growth.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-slate-400">
            Total Courses
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.totalCourses}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-slate-400">
            Courses Completed
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.completedCourses}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-slate-400">
            Total Quizzes
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.totalQuizzes}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-slate-400">
            Flashcards
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.totalFlashcards}
          </h2>
        </div>

      </div>

      <div className="mt-8">
        <AnalyticsChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Course Progress
          </h2>

          <div className="space-y-5">

            {courses.length === 0 ? (
              <p className="text-slate-400">
                No courses found
              </p>
            ) : (
              courses.map((course) => (
                <div key={course.id}>
                  <div className="flex justify-between mb-2">
                    <span>
                      {course.title}
                    </span>

                    <span>
                      {course.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 h-3 rounded-full">
                    <div
                      className="h-3 bg-indigo-500 rounded-full"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />
                  </div>
                </div>
              ))
            )}

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Learning Insights
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span className="text-slate-400">
                Total Notes
              </span>

              <span className="font-bold">
                {analytics.totalNotes}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Total Quizzes
              </span>

              <span className="font-bold">
                {analytics.totalQuizzes}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Flashcards
              </span>

              <span className="font-bold">
                {analytics.totalFlashcards}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Completed Courses
              </span>

              <span className="font-bold">
                {analytics.completedCourses}
              </span>
            </div>

          </div>

        </div>

      </div>

    </main>
  </div>
</div>
</AuthGuard>

);
}
