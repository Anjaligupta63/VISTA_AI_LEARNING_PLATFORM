import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";
import { courses } from "@/data/courses";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <MobileNavbar />

        <main className="p-8">

          {/* Header */}

          <div className="flex flex-col xl:flex-row gap-8">

            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full xl:w-105 h-65 object-cover rounded-3xl border border-white/10"
            />

            <div className="flex-1">

              <div className="inline-block px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400 mb-4">
                Active Learning Path
              </div>

              <h1 className="text-5xl font-bold">
                {course.title}
              </h1>

              <p className="text-slate-400 mt-4 text-lg">
                {course.description}
              </p>

              <div className="mt-8">

                <div className="flex justify-between mb-3">
                  <span className="text-slate-300">
                    Course Progress
                  </span>

                  <span className="font-bold">
                    {course.progress}%
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-4">

                  <div
                    className="h-4 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <p className="text-slate-400">
                Videos
              </p>

              <h2 className="text-4xl font-bold mt-2">
                42
              </h2>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <p className="text-slate-400">
                Quiz Score
              </p>

              <h2 className="text-4xl font-bold mt-2">
                91%
              </h2>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <p className="text-slate-400">
                Focus Hours
              </p>

              <h2 className="text-4xl font-bold mt-2">
                28h
              </h2>

            </div>

          </div>

          {/* Main Content */}

          <div className="grid xl:grid-cols-4 gap-6 mt-10">

            {/* Topics */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <h2 className="text-xl font-bold mb-5">
                Learning Modules
              </h2>

              <div className="space-y-4 text-slate-300">

                <div>✅ Introduction</div>

                <div>✅ Fundamentals</div>

                <div>✅ Problem Solving</div>

                <div>⬜ Intermediate Concepts</div>

                <div>⬜ Advanced Topics</div>

                <div>⬜ Interview Questions</div>

                <div>⬜ Mock Tests</div>

              </div>

            </div>

            {/* Video Section */}

            <div className="xl:col-span-2">

              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/B31LgI4Y4DQ"
                  title="Course Video"
                  allowFullScreen
                />

              </div>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-3xl p-6">

                <h2 className="text-2xl font-bold">
                  Current Lesson
                </h2>

                <p className="text-slate-400 mt-3">
                  Learn the fundamentals and build strong problem-solving skills through structured learning.
                </p>

              </div>

            </div>

            {/* AI Tools */}

            <div className="space-y-5">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="font-bold text-xl">
                  📝 AI Notes
                </h3>

                <p className="text-slate-400 mt-2">
                  Generate structured notes.
                </p>

                <button className="w-full mt-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
                  Generate Notes
                </button>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="font-bold text-xl">
                  🧠 AI Quiz
                </h3>

                <p className="text-slate-400 mt-2">
                  Test your understanding.
                </p>

                <button className="w-full mt-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
                  Generate Quiz
                </button>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="font-bold text-xl">
                  📚 Flashcards
                </h3>

                <p className="text-slate-400 mt-2">
                  Quick revision cards.
                </p>

                <button className="w-full mt-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
                  Generate Flashcards
                </button>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}