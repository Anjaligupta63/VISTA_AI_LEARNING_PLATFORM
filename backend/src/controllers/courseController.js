const prisma = require("../config/prisma");

const getCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      where: {
        userId: req.user.id,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      videoUrl,
    } = req.body;

    const course = await prisma.course.create({
      data: {
        title,
        description,
        videoUrl,
        userId: req.user.id,
      },
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    if (course.userId !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      videoUrl,
      progress,
    } = req.body;

    const course = await prisma.course.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    if (course.userId !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const updatedCourse =
      await prisma.course.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          title,
          description,
          videoUrl,
          progress,
        },
      });

    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    if (course.userId !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await prisma.course.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const completeCourse =
  async (req, res) => {
    try {
      const course =
        await prisma.course.update({
          where: {
            id: Number(
              req.params.id
            ),
          },
          data: {
            progress: 100,
          },
        });

      res.json(course);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });
    }
  };
module.exports = {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
    completeCourse,
};