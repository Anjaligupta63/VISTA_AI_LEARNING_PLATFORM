export default function ContinueLearning() {
  return (
    <div className="bg-linear-to-r from-indigo-600/20 to-cyan-600/20 border border-indigo-500/20 rounded-3xl p-6">

      <h2 className="text-2xl font-bold">
        Continue Learning
      </h2>

      <p className="text-slate-400 mt-2">
        DSA Mastery
      </p>

      <div className="mt-4">

        <div className="flex justify-between mb-2">
          <span>Progress</span>
          <span>65%</span>
        </div>

        <div className="w-full bg-slate-800 h-3 rounded-full">
          <div className="w-[65%] h-3 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

      </div>

      <button className="mt-5 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500">
        Resume Course
      </button>

    </div>
  );
}