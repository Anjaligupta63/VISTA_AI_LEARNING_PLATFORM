"use client";
import AuthGuard from "@/components/AuthGuard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";
import api from "@/lib/api";

type Course = {
  id: number;
  title: string;
  description: string;
  progress: number;
  videoUrl?: string;
};

type Note = {
  id: number;
  content: string;
};
type Quiz = {
  id: number;
  content: string;
};
type Flashcard = {
  id: number;
   content: string;
};
export default function CourseDetailPage() {
  const params = useParams();

  const [course, setCourse] =
    useState<Course | null>(null);

  const [notes, setNotes] =
    useState<Note[]>([]);
const [quizzes, setQuizzes] =
  useState<Quiz[]>([]);
  const [flashcards, setFlashcards] =
  useState<Flashcard[]>([]);
  const [loading, setLoading] =
    useState(true);

  const [progress, setProgress] =
    useState(0);


  const getEmbedUrl = (
    url?: string
  ) => {
    if (!url) return "";

    if (url.includes("youtu.be/")) {
      const videoId =
        url
          .split("youtu.be/")[1]
          .split("?")[0];

      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (
      url.includes(
        "youtube.com/watch?v="
      )
    ) {
      return url.replace(
        "watch?v=",
        "embed/"
      );
    }

    if (
      url.includes(
        "youtube.com/embed/"
      )
    ) {
      return url;
    }

    return url;
  };

  const fetchNotes = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await api.get(
      `/notes/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(
      "Fetched Notes:",
      res.data
    );

    setNotes(res.data);
  } catch (error) {
    console.log(
      "Fetch Notes Error:",
      error
    );
  }
};

const handleDeleteNote =
  async (noteId: number) => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.delete(
        `/notes/delete/${noteId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchNotes();

      alert(
        "Note Deleted ✅"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to delete note"
      );
    }
  };
  
const fetchQuiz = async () => {
  try {
    const token =
      localStorage.getItem(
        "token"
      );

    const res = await api.get(
      `/quiz/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setQuizzes(res.data);
  } catch (error) {
    console.log(error);
  }
};
const fetchFlashcards = async () => {
  try {
    const token =
      localStorage.getItem("token");

    const res = await api.get(
      `/flashcards/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setFlashcards(res.data);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    const fetchCourse =
      async () => {
        try {
          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await api.get(
              `/courses/${params.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setCourse(res.data);
          setProgress(
            res.data.progress || 0
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchCourse();
    fetchNotes();
fetchQuiz();
fetchFlashcards();
  }, [params.id]);

  const handleUpdateProgress =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        await api.put(
          `/courses/${params.id}`,
          {
            progress,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCourse((prev) =>
          prev
            ? {
                ...prev,
                progress,
              }
            : prev
        );

        alert(
          "Progress Updated ✅"
        );
      } catch (error) {
        console.log(error);

        alert(
          "Failed to update progress"
        );
      }
    };

 const handleGenerateNotes =
  async () => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        `/notes/${params.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchNotes();

      alert(
        "Notes Generated ✅"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to generate notes"
      );
    }
  };

const handleGenerateQuiz =
  async () => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        `/quiz/${params.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchQuiz();

      alert(
        "Quiz Generated ✅"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to generate quiz"
      );
    }
  };
  const handleDeleteQuiz =
  async (
    quizId: number
  ) => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.delete(
        `/quiz/delete/${quizId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchQuiz();

      alert(
        "Quiz Deleted ✅"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to delete quiz"
      );
    }
  };
const handleGenerateFlashcards =
  async () => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        `/flashcards/${params.id}`,
        {},
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      await fetchFlashcards();

      alert(
        "Flashcards Generated ✅"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to generate flashcards"
      );
    }
  };
  const handleDeleteFlashcard =
  async (
    flashcardId: number
  ) => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.delete(
        `/flashcards/delete/${flashcardId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchFlashcards();

      alert(
        "Flashcard Deleted ✅"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to delete flashcard"
      );
    }
  };
  const handleCompleteCourse =
  async () => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await api.put(
          `/courses/complete/${params.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      setCourse(res.data);

      setProgress(100);

      alert(
        "Course Completed ✅"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to complete course"
      );
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Course Not Found
      </div>
    );
  }

  return (
    <AuthGuard>
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <MobileNavbar />

        <main className="p-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h1 className="text-5xl font-bold">
              {course.title}
            </h1>

            <p className="text-slate-400 mt-4 text-lg">
              {course.description}
            </p>

            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span>
                  Course Progress
                </span>

                <span>
                  {progress}%
                </span>
              </div>
{progress === 100 && (
  <button
    onClick={() => {
      window.open(
        `http://localhost:5000/api/certificate?course=${course.title}`,
        "_blank"
      );
    }}
    className="mt-4 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-500"
  >
    Download Certificate
  </button>
)}
              <div className="w-full bg-slate-800 h-4 rounded-full">
                <div
                  className="h-4 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <div className="mt-6">
  <h3 className="text-lg font-semibold mb-4">
    Generated Notes
  </h3>

{notes &&
  notes.length > 0 ? (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="relative bg-slate-900 border border-white/10 p-4 rounded-xl"
        >
          <button
            onClick={() =>
              handleDeleteNote(
                note.id
              )
            }
            className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 px-2 py-1 rounded-lg text-sm"
          >
            🗑
          </button>

          <pre className="whitespace-pre-wrap text-slate-300 pr-10">
            {note.content}
          </pre>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-slate-400">
      No notes generated yet.
    </p>
  )}
</div>
            </div>
          </div>

          <div className="mt-8">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
              {course.videoUrl ? (
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(
                    course.videoUrl
                  )}
                  title={
                    course.title
                  }
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900">
                  No Video Added
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              AI Notes
            </h2>

            <button
              onClick={
                handleGenerateNotes
              }
              className="mt-4 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500"
            >
              Generate Notes
            </button>

            <div className="mt-6">
              {notes.length === 0 ? (
                <p className="text-slate-400">
                  No notes generated
                  yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {notes.map(
                    (note) => (
                      <div
                        key={note.id}
                        className="bg-slate-900 p-4 rounded-xl"
                      >
                        <pre className="whitespace-pre-wrap">
                          {
                            note.content
                          }
                        </pre>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">
  <h2 className="text-2xl font-bold">
    AI Quiz
  </h2>

  <button
    onClick={handleGenerateQuiz}
    className="mt-4 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500"
  >
    Generate Quiz
  </button>

 <div className="mt-6">
  {quizzes.length === 0 ? (
    <p>No quiz generated yet.</p>
  ) : (
    <div className="space-y-4">
      {quizzes.map((quiz) => (
        <div
          key={quiz.id}
          className="relative bg-slate-900 border border-white/10 p-4 rounded-xl"
        >
          <button
            onClick={() =>
              handleDeleteQuiz(
                quiz.id
              )
            }
            className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 px-2 py-1 rounded-lg text-sm"
          >
            🗑
          </button>

         <pre className="whitespace-pre-wrap text-slate-300 pr-10">
  {quiz.content}
</pre>
        </div>
      ))}
    </div>
  )}
</div>
</div>
<div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">

  <h2 className="text-2xl font-bold">
    AI Flashcards
  </h2>

  <button
    onClick={
      handleGenerateFlashcards
    }
    className="mt-4 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500"
  >
    Generate Flashcards
  </button>

  <div className="mt-6">
    {flashcards.length === 0 ? (
      <p className="text-slate-400">
        No flashcards generated yet.
      </p>
    ) : (
      <div className="grid md:grid-cols-2 gap-4">
        {flashcards.map((card) => (
  <div
    key={card.id}
    className="relative bg-slate-900 border border-white/10 p-4 rounded-xl"
  >
    <button
      onClick={() =>
        handleDeleteFlashcard(
          card.id
        )
      }
      className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 px-2 py-1 rounded-lg text-sm"
    >
      🗑
    </button>

   <pre className="whitespace-pre-wrap text-slate-300 pr-10">
  {card.content}
</pre>
  </div>
))}
      </div>
    )}
  </div>

</div>
        </main>
      </div>
    </div>
    </AuthGuard>
  );
}