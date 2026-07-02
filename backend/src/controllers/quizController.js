const prisma = require("../config/prisma");
const { generateContent } = require("../services/geminiService");
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      where: {
        courseId: Number(req.params.courseId),
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json(quizzes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createQuiz = async (req, res) => {
  try {
    const courseId = Number(req.params.courseId);

    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    const prompt = `
Generate 10 multiple choice questions on:

Title: ${course.title}

Description:
${course.description}

Format:

Question:
A.
B.
C.
D.

Correct Answer:
`;

    const aiQuiz = await generateContent(prompt);

    const quiz = await prisma.quiz.create({
      data: {
        content: aiQuiz,
        courseId,
      },
    });

    res.status(201).json(quiz);

  } catch (error) {
    console.log("Create Quiz Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteQuiz = async (
  req,
  res
) => {
  try {
    await prisma.quiz.delete({
      where: {
        id: Number(
          req.params.id
        ),
      },
    });

    res.json({
      message:
        "Quiz deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};
module.exports = {
  getQuizzes,
  createQuiz,
   deleteQuiz,
};