import {
  Brain,
  Clock3,
  BookOpen,
  BarChart3,
  FileText,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Notes",
  },
  {
    icon: FileText,
    title: "AI Quiz",
  },
  {
    icon: Clock3,
    title: "Pomodoro Focus",
  },
  {
    icon: BarChart3,
    title: "Analytics",
  },
  {
    icon: BookOpen,
    title: "Learning Paths",
  },
  {
    icon: Trophy,
    title: "Placement Prep",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:bg-white/10
                hover:scale-105
                transition
              "
              >
                <Icon
                  size={40}
                  className="text-indigo-400"
                />

                <h3 className="text-2xl font-semibold mt-5">
                  {feature.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  Improve learning efficiency and
                  productivity using AI powered tools.
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}