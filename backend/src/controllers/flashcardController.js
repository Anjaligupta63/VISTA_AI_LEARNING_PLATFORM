const prisma = require("../config/prisma");
const { generateContent } = require("../services/geminiService");
const getFlashcards = async (
  req,
  res
) => {
  try {
    const flashcards =
      await prisma.flashcard.findMany({
        where: {
          courseId: Number(
            req.params.courseId
          ),
        },
        orderBy: {
          id: "desc",
        },
      });

    res.json(flashcards);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createFlashcards = async (req, res) => {
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
Generate 15 flashcards on:

Title: ${course.title}

Description:
${course.description}

Format:

Q: Question

A: Answer
`;

    const aiFlashcards = await generateContent(prompt);

    const flashcard = await prisma.flashcard.create({
      data: {
        content: aiFlashcards,
        courseId,
      },
    });

    res.status(201).json(flashcard);

  } catch (error) {
    console.log("Flashcard Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteFlashcard =
  async (req, res) => {
    try {
      await prisma.flashcard.delete({
        where: {
          id: Number(
            req.params.id
          ),
        },
      });

      res.json({
        message:
          "Flashcard deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getFlashcards,
  createFlashcards,
  deleteFlashcard,
};