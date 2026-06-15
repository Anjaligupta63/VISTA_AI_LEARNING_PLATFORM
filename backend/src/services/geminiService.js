const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");
console.log(
  "GEMINI KEY:",
  process.env.GEMINI_API_KEY
);
const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

const model =
  genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

const generateNotes = async (title, description) => {
  try {
    const prompt = `
Create detailed study notes for:

Title: ${title}

Description:
${description}

Format:
1. Introduction
2. Important Concepts
3. Key Points
4. Summary

Use teacher-style explanations.
`;

    const result = await model.generateContent(prompt);

    console.log(result.response.text());

    return result.response.text();
  } catch (error) {
    console.log("GEMINI ERROR:");
    console.log(error);
    throw error;
  }
};

    

module.exports = {
  generateNotes,
};