import Sidebar from "@/components/dashboard/Sidebar";
import CreatePathModal from "@/components/courses/CreatePathModal";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              My Courses
            </h1>

            <p className="text-slate-400 mt-2">
              Organize your learning journey
            </p>

          </div>

          <CreatePathModal />

        </div>

        {/* Course Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              progress={course.progress}
              thumbnail={course.thumbnail}
            />
          ))}

        </div>

      </main>

    </div>
  );
}