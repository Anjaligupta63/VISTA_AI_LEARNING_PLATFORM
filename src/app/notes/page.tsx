import Sidebar from "@/components/dashboard/Sidebar";

export default function NotesPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold">AI Notes</h1>

        <p className="text-slate-400 mt-2">
          Your generated notes will appear here.
        </p>
      </main>
    </div>
  );
}