const {
  generateChatResponse,
} = require("../services/openRouterService");

const chatWithAI = async (
  req,
  res
) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message required",
      });
    }

    const reply =
      await generateChatResponse(
        message
      );

    res.json({
      reply,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};