export default function Stats() {
  const stats = [
    { value: "10K+", label: "Students" },
    { value: "50K+", label: "Hours Focused" },
    { value: "95%", label: "Quiz Accuracy" },
    { value: "500+", label: "Courses" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-indigo-400">
              {item.value}
            </h2>

            <p className="mt-3 text-slate-400">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}