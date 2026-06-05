export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Purple Glow */}
      <div className="absolute top-0 left-0 h-125 w-125 rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Cyan Glow */}
      <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl">

        <p className="text-indigo-400 font-semibold">
          AI Powered Learning Platform
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mt-5 leading-tight">
          Learn Smarter
          <br />
          With AI & Productivity
        </h1>

        <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">
          Transform YouTube playlists into structured
          learning paths, AI notes, quizzes,
          productivity systems and placement preparation.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="px-8 py-4 rounded-2xl bg-linear-to-r from-indigo-600 to-cyan-500 font-semibold shadow-lg shadow-indigo-500/30 hover:scale-105 transition">
            Start Learning
          </button>

          <button className="px-8 py-4 rounded-2xl border border-slate-700 hover:bg-slate-800 transition">
            View Demo
          </button>

        </div>

      </div>

    </section>
  );
}