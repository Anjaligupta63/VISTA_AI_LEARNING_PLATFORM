const prisma = require("../config/prisma");
const { generateContent } = require("../services/geminiService");
const getNotes = async (req, res) => {
  try {
    const notes = await prisma.note.findMany({
      where: {
        courseId: Number(req.params.courseId),
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json(notes);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


const createNote = async (req, res) => {
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
Generate detailed study notes on:

Title: ${course.title}

Description:
${course.description}

Requirements:
- Easy language
- Proper headings
- Bullet points
- Real-life examples
- Interview questions
- Summary at the end
`;

    const aiNotes = await generateContent(prompt);

    const note = await prisma.note.create({
      data: {
        content: aiNotes,
        courseId,
      },
    });

    res.status(201).json(note);
  } catch (error) {
    console.log("Create Note Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};



const deleteNote = async (req, res) => {
  try {
    await prisma.note.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Note deleted successfully",
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