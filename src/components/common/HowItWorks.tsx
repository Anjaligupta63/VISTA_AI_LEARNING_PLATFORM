export default function HowItWorks() {
  const steps = [
    "Add YouTube Playlist",
    "Generate AI Notes",
    "Take AI Quiz",
    "Track Progress",
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <div className="text-3xl font-bold text-indigo-400">
                {index + 1}
              </div>

              <h3 className="mt-4 font-semibold text-lg">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}