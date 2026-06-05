import Sidebar from "@/components/dashboard/Sidebar";
import VideoPlayer from "@/components/courses/VideoPlayer";
import Playlist from "@/components/courses/Playlist";
import NotesPanel from "@/components/courses/NotesPanel";

export default function CourseDetailsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          DSA Mastery
        </h1>

        <p className="text-slate-400 mt-2">
          Learn Data Structures & Algorithms
        </p>

        <div className="mt-8">
          <VideoPlayer />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <Playlist />

          <NotesPanel />

        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          <button className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500">
            Generate Notes
          </button>

          <button className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500">
            Generate Quiz
          </button>

          <button className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500">
            Flashcards
          </button>

          <button className="px-5 py-3 rounded-xl bg-green-600 hover:bg-green-500">
            Mark Complete
          </button>

        </div>

      </main>

    </div>
  );
}