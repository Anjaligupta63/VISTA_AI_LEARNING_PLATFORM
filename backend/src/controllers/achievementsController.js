const prisma = require("../config/prisma");

const getAchievements = async (
req,
res
) => {
try {
const userId = req.user.id;


const courses =
  await prisma.course.findMany({
    where: {
      userId,
    },
    include: {
      notes: true,
      quizzes: true,
      flashcards: true,
    },
  });

const totalCourses =
  courses.length;

const completedCourses =
  courses.filter(
    (course) =>
      course.progress === 100
  ).length;

const totalNotes =
  courses.reduce(
    (sum, course) =>
      sum +
      course.notes.length,
    0
  );

const totalQuizzes =
  courses.reduce(
    (sum, course) =>
      sum +
      course.quizzes.length,
    0
  );

const totalFlashcards =
  courses.reduce(
    (sum, course) =>
      sum +
      course.flashcards.length,
    0
  );

const achievements = [
  {
    title:
      "First Course",
    unlocked:
      totalCourses >= 1,
  },
  {
    title:
      "Course Master",
    unlocked:
      completedCourses >= 5,
  },
  {
    title:
      "Notes Generator",
    unlocked:
      totalNotes >= 10,
  },
  {
    title:
      "Quiz Master",
    unlocked:
      totalQuizzes >= 10,
  },
  {
    title:
      "Flashcard Pro",
    unlocked:
      totalFlashcards >= 10,
  },
];

return res.json(
  achievements
);


} catch (error) {
console.log(error);


return res.status(500).json({
  message:
    error.message,
});


}
};

module.exports = {
getAchievements,
};
