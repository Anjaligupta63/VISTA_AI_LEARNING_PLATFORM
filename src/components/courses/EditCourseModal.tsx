"use client";

import { useState } from "react";
import api from "@/lib/api";

import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
id: number;
title: string;
description: string;
videoUrl?: string;
};

export default function EditCourseModal({
id,
title: initialTitle,
description: initialDescription,
videoUrl: initialVideoUrl,
}: Props) {
const [title, setTitle] =
useState(initialTitle);

const [description, setDescription] =
useState(initialDescription);

const [videoUrl, setVideoUrl] =
useState(initialVideoUrl || "");

const handleUpdateCourse =
async () => {
try {
const token =
localStorage.getItem("token");

    await api.put(
      `/courses/${id}`,
      {
        title,
        description,
        videoUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(
      "Course Updated ✅"
    );

    window.location.reload();
  } catch (error) {
    console.log(error);

    alert(
      "Failed to update course"
    );
  }
};

return (
<Dialog>

  <DialogTrigger asChild>

    <button className="bg-yellow-600 hover:bg-yellow-500 px-3 py-1 rounded-lg text-sm">
      ✏️
    </button>

  </DialogTrigger>

  <DialogContent className="bg-slate-900 text-white border-slate-700">

    <DialogHeader>

      <DialogTitle>
        Edit Course
      </DialogTitle>

    </DialogHeader>

    <div className="space-y-4 mt-4">

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Course Name"
        className="w-full p-3 rounded-lg bg-slate-800"
      />

      <textarea
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        placeholder="Course Description"
        className="w-full p-3 rounded-lg bg-slate-800"
      />

      <input
        value={videoUrl}
        onChange={(e) =>
          setVideoUrl(e.target.value)
        }
        placeholder="YouTube Video URL"
        className="w-full p-3 rounded-lg bg-slate-800"
      />

      <button
        onClick={handleUpdateCourse}
        className="w-full p-3 rounded-lg bg-indigo-600 hover:bg-indigo-500"
      >
        Save Changes
      </button>

    </div>

  </DialogContent>

</Dialog>

);
}