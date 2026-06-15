
const prisma = require("../config/prisma");

const {
  generateNotes,
} = require("../services/geminiService");
const getNotes = async (req, res) => {
  try {
    console.log(
      "GET NOTES HIT:",
      req.params.courseId
    );

    const notes =
      await prisma.note.findMany({
        where: {
          courseId: Number(
            req.params.courseId
          ),
        },
        orderBy: {
          id: "desc",
        },
      });

    console.log(
      "FOUND NOTES:",
      notes
    );

    res.json(notes);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const createNote = async (
  req,
  res
) => {
  try {
    const course =
      await prisma.course.findUnique({
        where: {
          id: Number(
            req.params.courseId
          ),
        },
      });

    if (!course) {
      return res.status(404).json({
        message:
          "Course not found",
      });
    }

    const aiNotes =
      await generateNotes(
        course.title,
        course.description
      );

    const note =
      await prisma.note.create({
        data: {
          content: aiNotes,
          courseId: course.id,
        },
      });

    res.status(201).json(note);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteNote = async (
  req,
  res
) => {
  try {
    const noteId = Number(
      req.params.id
    );

    await prisma.note.delete({
      where: {
        id: noteId,
      },
    });

    res.json({
      message:
        "Note deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getNotes,
  createNote,
  deleteNote,
};