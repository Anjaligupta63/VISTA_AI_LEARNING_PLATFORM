import Link from "next/link";

type Props = {
  id: number;
  title: string;
  description: string;
  progress: number;
  thumbnail: string;
};

export default function CourseCard({
  id,
  title,
  description,
  progress,
  thumbnail,
}: Props) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="overflow-hidden bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer">

        <img
          src={thumbnail}
          alt={title}
          className="w-full h-52 md:h-48 object-cover"
        />

        <div className="p-6">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-slate-400 mt-2">
            {description}
          </p>

          <div className="mt-5">

            <div className="flex justify-between mb-2">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>

            <div className="w-full bg-slate-800 h-3 rounded-full">

              <div
                className="h-3 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500"
                style={{ width: `${progress}%` }}
              />

            </div>

          </div>

        </div>

      </div>
    </Link>
  );
}