"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  courses: number;
  notes: number;
  quizzes: number;
  flashcards: number;
};

export default function ProgressChart({
  courses,
  notes,
  quizzes,
  flashcards,
}: Props) {
  const data = [
    {
      name: "Courses",
      value: courses,
    },
    {
      name: "Notes",
      value: notes,
    },
    {
      name: "Quiz",
      value: quizzes,
    },
    {
      name: "Cards",
      value: flashcards,
    },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Learning Analytics
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="value"
              fill="#6366f1"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}