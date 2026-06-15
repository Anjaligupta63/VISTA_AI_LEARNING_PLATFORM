const prisma = require("../config/prisma");

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

const createFlashcards = async (
  req,
  res
) => {
  try {
    const courseId = Number(
      req.params.courseId
    );

    const existing =
      await prisma.flashcard.findMany({
        where: {
          courseId,
        },
      });

    if (existing.length > 0) {
      return res.status(400).json({
        message:
          "Flashcards already generated",
      });
    }

    await prisma.flashcard.createMany({
      data: [
        {
          question:
            "What is DSA?",
          answer:
            "Data Structures and Algorithms",
          courseId,
        },
        {
          question:
            "Why learn DSA?",
          answer:
            "To solve problems efficiently",
          courseId,
        },
        {
          question:
            "What is Time Complexity?",
          answer:
            "Measure of algorithm performance",
          courseId,
        },
      ],
    });

    res.status(201).json({
      message:
        "Flashcards generated successfully",
    });
  } catch (error) {
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