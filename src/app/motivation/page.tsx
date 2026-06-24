import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/dashboard/Sidebar";

export default function MotivationPage() {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Motivation Hub
        </h1>

        <p className="text-slate-400 mt-2">
          Stay inspired. Stay disciplined. Stay unstoppable.
        </p>

        {/* Hero Section */}

        <div className="mt-8 bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-3xl p-8">

          <h2 className="text-3xl font-bold">
            🚀 Today's Mindset
          </h2>

          <p className="mt-6 text-xl leading-relaxed">

            You don't need to be motivated every day.

            <br />
            <br />

            You only need to be consistent.

            <br />
            <br />

            The version of yourself you dream about
            is created by the choices you make today.

            <br />
            <br />

            Open the course.
            Start the timer.
            Take the next step.

          </p>

        </div>

        {/* Reminder + Challenge */}

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              🎯 Remember Why You Started
            </h2>

            <p className="text-slate-300 leading-8">

              Every chapter completed.

              <br />

              Every quiz attempted.

              <br />

              Every Pomodoro session finished.

              <br />
              <br />

              These small wins are building the future
              version of yourself.

              <br />
              <br />

              Keep going.

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              ⚡ Today's Challenge
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-900 rounded-xl p-4">
                ✅ Complete 1 Course Lesson
              </div>

              <div className="bg-slate-900 rounded-xl p-4">
                🧠 Review 5 Flashcards
              </div>

              <div className="bg-slate-900 rounded-xl p-4">
                📚 Generate 1 Note
              </div>

              <div className="bg-slate-900 rounded-xl p-4">
                ⏳ Finish 1 Pomodoro Session
              </div>

            </div>

          </div>

        </div>

        {/* Quotes */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            🔥 Powerful Reminders
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-slate-900 rounded-xl p-5">
              Discipline is choosing what you want most
              over what you want now.
            </div>

            <div className="bg-slate-900 rounded-xl p-5">
              Small progress every day adds up to
              massive results.
            </div>

            <div className="bg-slate-900 rounded-xl p-5">
              Dreams work only when you do.
            </div>

            <div className="bg-slate-900 rounded-xl p-5">
              Your future self is watching your
              decisions today.
            </div>

            <div className="bg-slate-900 rounded-xl p-5">
              Success is not built in a day.
              It is built daily.
            </div>

            <div className="bg-slate-900 rounded-xl p-5">
              Consistency beats motivation.
              Every single time.
            </div>

          </div>

        </div>

        {/* Career Motivation */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            🚀 Career Motivation
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-slate-900 rounded-xl p-5 hover:border-indigo-500 transition">
              <h3 className="font-semibold">
                💼 Internship Success Stories
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Learn how students secured top internships.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-5 hover:border-indigo-500 transition">
              <h3 className="font-semibold">
                🌟 GSoC & Open Source Journeys
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Discover real stories from contributors.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-5 hover:border-indigo-500 transition">
              <h3 className="font-semibold">
                🏆 FAANG Placement Experiences
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Learn the roadmap followed by achievers.
              </p>
            </div>

          </div>

        </div>

        {/* Final Message */}

        <div className="mt-8 bg-linear-to-r from-green-600/20 to-cyan-600/20 border border-green-500/20 rounded-3xl p-8 text-center">

          <h2 className="text-3xl font-bold">
            🌱 One Day or Day One
          </h2>

          <p className="text-xl text-slate-300 mt-4 max-w-3xl mx-auto">

            The difference between successful people
            and everyone else is not talent.

            <br />
            <br />

            It's the willingness to start,
            continue, and never quit.

            <br />
            <br />

            Today is another opportunity to become
            the person you want to be.

          </p>

        </div>

      </main>

    </div>
    </AuthGuard>
  );
}