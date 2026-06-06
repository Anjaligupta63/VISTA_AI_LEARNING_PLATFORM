import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">

      <h1 className="text-8xl font-bold">
        404
      </h1>

      <p className="text-slate-400 mt-4">
        Page not found
      </p>

      <Link
        href="/dashboard"
        className="mt-6 px-6 py-3 bg-indigo-600 rounded-xl"
      >
        Back to Dashboard
      </Link>

    </div>
  );
}