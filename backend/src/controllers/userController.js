const prisma = require("../config/prisma");

const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProfileStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const courses = await prisma.course.findMany({
      where: {
        userId,
      },
    });

    const completedCourses = courses.filter(
      (course) => course.progress === 100
    ).length;

    res.json({
      completedCourses,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  getProfileStats,
};