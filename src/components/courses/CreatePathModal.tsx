"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CreatePathModal() {
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
            placeholder="Course Name"
            className="w-full p-3 rounded-lg bg-slate-800"
          />

          <input
            placeholder="YouTube Playlist URL"
            className="w-full p-3 rounded-lg bg-slate-800"
          />

          <select className="w-full p-3 rounded-lg bg-slate-800">

            <option>DSA</option>

            <option>Web Development</option>

            <option>AI / ML</option>

          </select>

          <button className="w-full p-3 rounded-lg bg-indigo-600">
            Create Path
          </button>

        </div>

      </DialogContent>

    </Dialog>
  );
}