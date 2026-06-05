import Sidebar from "@/components/dashboard/Sidebar";

export default function MotivationPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Motivation Hub
        </h1>

        <p className="text-slate-400 mt-2">
          Stay inspired. Stay disciplined.
        </p>

        {/* Daily Quote */}

        <div className="mt-8 bg-linear-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8">

          <h2 className="text-2xl font-bold">
            Daily Quote
          </h2>

          <p className="mt-4 text-lg">
            "Success doesn't come from motivation.
            It comes from discipline."
          </p>

        </div>

        {/* Categories */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              📚 Before Study
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Deep Work</li>
              <li>• Study With Me</li>
              <li>• Productivity Tips</li>
              <li>• Focus Music</li>
            </ul>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              🔥 During Burnout
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Success Stories</li>
              <li>• Comeback Videos</li>
              <li>• Mindset Training</li>
              <li>• Motivation Shorts</li>
            </ul>

          </div>

        </div>

        {/* Placement Motivation */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            🚀 Placement Preparation
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-slate-900 rounded-xl p-4">
              GSoC Journey
            </div>

            <div className="bg-slate-900 rounded-xl p-4">
              Internship Success
            </div>

            <div className="bg-slate-900 rounded-xl p-4">
              FAANG Placement Stories
            </div>

          </div>

        </div>

        {/* Women in Tech */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            👩‍💻 Women in Tech
          </h2>

          <p className="text-slate-300">
            Inspiring journeys, talks, and success stories
            from women engineers and leaders in technology.
          </p>

        </div>

      </main>

    </div>
  );
}