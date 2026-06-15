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

export default function CreatePathModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [videoUrl, setVideoUrl] =
    useState("");

  const handleCreateCourse = async () => {
    try {
      const token =
        localStorage.getItem("token");

      await api.post(
        "/courses",
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

      alert("Course Created ✅");

      window.location.reload();
    } catch (error) {
      console.log(error);

      alert("Failed to create course");
    }
  };

  return (
    <Dialog>

      <DialogTrigger asChild>

        <button className="px-5 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-500">
          + Create Path
        </button>

      </DialogTrigger>

      <DialogContent className="bg-slate-900 text-white border-slate-700">

        <DialogHeader>

          <DialogTitle>
            Create Learning Path
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
            onClick={handleCreateCourse}
            className="w-full p-3 rounded-lg bg-indigo-600 hover:bg-indigo-500"
          >
            Create Path
          </button>

        </div>

      </DialogContent>

    </Dialog>
  );
}