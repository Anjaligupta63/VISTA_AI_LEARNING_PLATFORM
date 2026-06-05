export default function LearningPaths() {
  const paths = [
    "DSA Mastery",
    "Web Development",
    "System Design",
    "AI / ML",
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Popular Learning Paths
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {paths.map((path) => (
            <div
              key={path}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {path}
              </h3>

              <div className="w-full bg-slate-800 h-3 rounded-full mt-6">
                <div className="bg-indigo-500 h-3 rounded-full w-2/3" />
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}