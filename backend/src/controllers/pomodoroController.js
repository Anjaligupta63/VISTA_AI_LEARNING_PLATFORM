const prisma = require("../config/prisma");

const saveSession = async (
  req,
  res
) => {
  try {
    const userId = req.user.id;

    const { duration } = req.body;

    const session =
      await prisma.studySession.create({
        data: {
          duration,
          userId,
        },
      });

    res.json(session);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveSession,
};