import {
  Flame,
  BookOpen,
  Clock3,
  Trophy,
} from "lucide-react";

export default function StatsCards() {
  const cards = [
    {
      title: "Current Streak",
      value: "28 Days",
      icon: Flame,
    },
    {
      title: "Courses",
      value: "12",
      icon: BookOpen,
    },
    {
      title: "Focus Hours",
      value: "128h",
      icon: Clock3,
    },
    {
      title: "XP Points",
      value: "2450",
      icon: Trophy,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center justify-between">

              <p className="text-slate-400">
                {card.title}
              </p>

              <div className="p-3 rounded-xl bg-indigo-500/10">

                <Icon
                  size={20}
                  className="text-indigo-400"
                />

              </div>

            </div>

            <h2 className="text-4xl font-bold mt-5">
              {card.value}
            </h2>

          </div>
        );
      })}

    </div>
  );
}