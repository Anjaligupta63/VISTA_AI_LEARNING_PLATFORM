"use client";

import Link from "next/link";
import api from "@/lib/api";
import EditCourseModal from "./EditCourseModal";

type Props = {
id: number;
title: string;
description: string;
progress: number;
thumbnail: string;
videoUrl?: string;
};

export default function CourseCard({
id,
title,
description,
progress,
thumbnail,
videoUrl,
}: Props) {
const handleDelete = async (
e: React.MouseEvent
) => {
e.preventDefault();
e.stopPropagation();


const confirmDelete =
  window.confirm(
    "Delete this course?"
  );

if (!confirmDelete) return;

try {
  const token =
    localStorage.getItem("token");

  await api.delete(
    `/courses/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  alert(
    "Course deleted successfully ✅"
  );

  window.location.reload();
} catch (error) {
  console.log(error);

  alert(
    "Failed to delete course"
  );
}


};

return (
<Link href={`/courses/${id}`}> <div className="overflow-hidden bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative">


    <div className="absolute top-3 right-3 flex gap-2 z-10">

      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <EditCourseModal
          id={id}
          title={title}
          description={description}
          videoUrl={videoUrl}
        />
      </div>

      <button
        onClick={handleDelete}
        className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-lg text-sm"
      >
        🗑️
      </button>

    </div>

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
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>

  </div>
</Link>


);
}
