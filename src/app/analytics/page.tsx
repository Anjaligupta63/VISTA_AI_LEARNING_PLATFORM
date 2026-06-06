import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <MobileNavbar />

        <main className="p-8">

          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Track learning performance, focus, retention and growth.
          </p>

          {/* Top Stats */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-slate-400">
                Focus Hours
              </p>

              <h2 className="text-4xl font-bold mt-3">
                128h
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-slate-400">
                Courses Completed
              </p>

              <h2 className="text-4xl font-bold mt-3">
                12
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-slate-400">
                Quiz Accuracy
              </p>

              <h2 className="text-4xl font-bold mt-3">
                91%
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-slate-400">
                Current Streak
              </p>

              <h2 className="text-4xl font-bold mt-3">
                14 Days
              </h2>
            </div>

          </div>

          {/* Chart */}

          <div className="mt-8">
            <AnalyticsChart />
          </div>

          {/* Additional Analytics */}

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Course Progress
              </h2>

              <div className="space-y-5">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>DSA Mastery</span>
                    <span>65%</span>
                  </div>

                  <div className="w-full bg-slate-800 h-3 rounded-full">
                    <div className="w-[65%] h-3 bg-indigo-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Web Development</span>
                    <span>40%</span>
                  </div>

                  <div className="w-full bg-slate-800 h-3 rounded-full">
                    <div className="w-[40%] h-3 bg-cyan-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>AI & ML</span>
                    <span>20%</span>
                  </div>

                  <div className="w-full bg-slate-800 h-3 rounded-full">
                    <div className="w-[20%] h-3 bg-green-500 rounded-full" />
                  </div>
                </div>

              </div>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Learning Insights
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Retention Rate
                  </span>

                  <span className="font-bold">
                    84%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Flashcards Reviewed
                  </span>

                  <span className="font-bold">
                    452
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Quiz Attempts
                  </span>

                  <span className="font-bold">
                    98
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Notes Generated
                  </span>

                  <span className="font-bold">
                    74
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Achievement Badges
                  </span>

                  <span className="font-bold">
                    16
                  </span>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}