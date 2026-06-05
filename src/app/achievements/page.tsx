import Sidebar from "@/components/dashboard/Sidebar";

export default function AchievementsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Achievements
        </h1>

        <p className="text-slate-400 mt-2">
          Track your milestones and unlock rewards
        </p>

        {/* XP Card */}

        <div className="mt-8 bg-linear-to-r from-indigo-600 to-cyan-500 rounded-3xl p-8">

          <h2 className="text-2xl font-bold">
            Level 12 Explorer
          </h2>

          <p className="mt-2">
            XP: 2,450 / 3,000
          </p>

          <div className="w-full bg-white/20 h-3 rounded-full mt-4">
            <div className="w-[82%] h-3 bg-white rounded-full" />
          </div>

        </div>

        {/* Achievement Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl">🏅</h3>
            <h4 className="font-bold mt-3">
              First Course Completed
            </h4>
            <p className="text-slate-400 mt-2">
              Complete your first course.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl">🔥</h3>
            <h4 className="font-bold mt-3">
              7-Day Streak
            </h4>
            <p className="text-slate-400 mt-2">
              Study for 7 consecutive days.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl">🧠</h3>
            <h4 className="font-bold mt-3">
              Quiz Master
            </h4>
            <p className="text-slate-400 mt-2">
              Score above 90% in quizzes.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl">⏱</h3>
            <h4 className="font-bold mt-3">
              Focus Champion
            </h4>
            <p className="text-slate-400 mt-2">
              Complete 100 focus hours.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl">📚</h3>
            <h4 className="font-bold mt-3">
              Knowledge Seeker
            </h4>
            <p className="text-slate-400 mt-2">
              Review 100 flashcards.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl">🚀</h3>
            <h4 className="font-bold mt-3">
              Placement Ready
            </h4>
            <p className="text-slate-400 mt-2">
              Complete all DSA modules.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}