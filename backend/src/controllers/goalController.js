const prisma = require("../config/prisma");

const getGoal = async (req, res) => {
  try {
    const goal =
      await prisma.goal.findFirst({
        orderBy: {
          id: "desc",
        },
      });

    res.json(goal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateGoal = async (
  req,
  res
) => {
  try {
    const { target, completed } =
      req.body;

    const goal =
      await prisma.goal.create({
        data: {
          target,
          completed,
          userId: req.user.id,
        },
      });

    res.json(goal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getGoal,
  updateGoal,
};