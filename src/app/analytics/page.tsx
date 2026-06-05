import Sidebar from "@/components/dashboard/Sidebar";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Track your learning performance
        </p>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-slate-400">Focus Hours</h3>
            <p className="text-3xl font-bold mt-2">128</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-slate-400">Courses Completed</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-slate-400">Quiz Accuracy</h3>
            <p className="text-3xl font-bold mt-2">91%</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-slate-400">Current Streak</h3>
            <p className="text-3xl font-bold mt-2">14 Days</p>
          </div>

        </div>

        {/* Graph */}

        <div className="mt-8">
          <AnalyticsChart />
        </div>

      </main>

    </div>
  );
}