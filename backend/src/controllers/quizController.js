const prisma = require("../config/prisma");

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
    const questions = [
      {
        question:
          "What is a Data Structure?",
        answer:
          "A way of organizing and storing data.",
      },
      {
        question:
          "What is an Algorithm?",
        answer:
          "A step-by-step procedure to solve a problem.",
      },
      {
        question:
          "What is Big O Notation?",
        answer:
          "A way to measure algorithm efficiency.",
      },
      {
        question:
          "Difference between Stack and Queue?",
        answer:
          "Stack is LIFO, Queue is FIFO.",
      },
      {
        question:
          "What is Binary Search?",
        answer:
          "A searching algorithm for sorted arrays.",
      },
    ];

    const createdQuiz = [];

    for (const item of questions) {
      const quiz =
        await prisma.quiz.create({
          data: {
            question:
              item.question,
            answer:
              item.answer,
            courseId: Number(
              req.params.courseId
            ),
          },
        });

      createdQuiz.push(quiz);
    }

    res.status(201).json(
      createdQuiz
    );
  } catch (error) {
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