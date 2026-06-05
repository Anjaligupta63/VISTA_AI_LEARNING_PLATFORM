export default function CurrentCourses() {
  const courses = [
    "DSA Mastery",
    "Web Development",
    "System Design",
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-5">
        Current Courses
      </h2>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course}
            className="bg-slate-900 rounded-xl p-4"
          >
            <h3>{course}</h3>

            <div className="w-full bg-slate-800 h-2 rounded-full mt-3">
              <div className="bg-indigo-500 h-2 rounded-full w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}