const prisma = require("../config/prisma");

const getDashboardStats = async (
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

    const averageProgress =
      totalCourses === 0
        ? 0
        : Math.round(
            courses.reduce(
              (sum, course) =>
                sum +
                course.progress,
              0
            ) / totalCourses
          );

    res.json({
      totalCourses,
      totalNotes,
      totalQuizzes,
      totalFlashcards,
      averageProgress,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getRecentActivity = async (
  req,
  res
) => {
  try {
    const userId = req.user.id;

    const activities =
      await prisma.course.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      });

    res.json(activities);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getAnalytics = async (
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

    const completedCourses =
      courses.filter(
        (course) =>
          course.progress ===
          100
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

    res.json({
      totalCourses:
        courses.length,
      completedCourses,
      totalNotes,
      totalQuizzes,
      totalFlashcards,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
  getRecentActivity,
  getAnalytics,
};