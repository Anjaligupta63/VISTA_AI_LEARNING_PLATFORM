const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const testAI = async (req, res) => {
  try {
    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content:
              "Explain Binary Search in simple words",
          },
        ],
      });

    res.json({
      answer:
        response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  testAI,
};