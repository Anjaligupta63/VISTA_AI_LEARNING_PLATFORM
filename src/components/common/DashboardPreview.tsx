export default function DashboardPreview() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Learning Dashboard
        </h2>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Focus Hours
              </h3>

              <p className="text-4xl font-bold mt-2">
                128h
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Courses
              </h3>

              <p className="text-4xl font-bold mt-2">
                12
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Accuracy
              </h3>

              <p className="text-4xl font-bold mt-2">
                91%
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Streak
              </h3>

              <p className="text-4xl font-bold mt-2">
                28 Days
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}