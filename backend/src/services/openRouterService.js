const axios = require("axios");

const generateChatResponse =
  async (message) => {
    const response =
      await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model:
            "deepseek/deepseek-chat",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type":
              "application/json",
          },
        }
      );

    return response.data.choices[0]
      .message.content;
  };

module.exports = {
  generateChatResponse,
};