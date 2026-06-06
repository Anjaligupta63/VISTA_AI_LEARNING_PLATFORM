import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";
import { user } from "@/data/user";
export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <MobileNavbar />

        <main className="p-8">

          <h1 className="text-4xl font-bold">
            Profile
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your account and learning progress
          </p>

          {/* Profile Card */}

          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex flex-col md:flex-row items-center gap-6">

              <div className="w-28 h-28 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-4xl font-bold">
                A
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  {user.name}
                </h2>

                <p className="text-slate-400 mt-2">
                  {user.email}
                </p>

                <div className="mt-4 inline-block px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                  Level {user.level} Explorer
                </div>

              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Courses Completed
              </h3>

              <p className="text-4xl font-bold mt-3">
                12
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Focus Hours
              </h3>

              <p className="text-4xl font-bold mt-3">
                128h
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Quiz Accuracy
              </h3>

              <p className="text-4xl font-bold mt-3">
                91%
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-slate-400">
                Current Streak
              </h3>

              <p className="text-4xl font-bold mt-3">
                28 Days
              </p>
            </div>

          </div>

          {/* Achievements Preview */}

          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Recent Achievements
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="bg-slate-900 rounded-2xl p-5">
                🏅 First Course Completed
              </div>

              <div className="bg-slate-900 rounded-2xl p-5">
                🔥 7-Day Streak
              </div>

              <div className="bg-slate-900 rounded-2xl p-5">
                🧠 Quiz Master
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}