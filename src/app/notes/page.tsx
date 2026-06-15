"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import api from "@/lib/api";

type Note = {
  id: number;
  content: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const fetchAllNotes = async () => {
    try {
      const token = localStorage.getItem("token");

      const coursesRes = await api.get(
        "/courses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const courses = coursesRes.data;

      let allNotes: Note[] = [];

      for (const course of courses) {
        try {
          const notesRes = await api.get(
            `/notes/${course.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          allNotes = [
            ...allNotes,
            ...notesRes.data,
          ];
        } catch (error) {
          console.log(error);
        }
      }

      allNotes.sort(
        (a, b) => b.id - a.id
      );

      setNotes(allNotes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold">
          AI Notes
        </h1>

        <p className="text-slate-400 mt-2 mb-8">
          All generated notes from your courses
        </p>

        {loading ? (
          <div className="text-slate-400">
            Loading Notes...
          </div>
        ) : notes.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            No notes generated yet.
          </div>
        ) : (
          <div className="space-y-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <pre className="whitespace-pre-wrap text-slate-300">
                  {note.content}
                </pre>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}