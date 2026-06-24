require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const noteRoutes = require("./routes/noteRoutes");
const quizRoutes = require("./routes/quizRoutes");
const flashcardRoutes = require("./routes/flashcardRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const achievementsRoutes = require("./routes/achievementsRoutes");
const pomodoroRoutes =
require("./routes/pomodoroRoutes");
const aiRoutes = require(
  "./routes/aiRoutes"
);
const app = express();


app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/flashcards", flashcardRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/certificate", certificateRoutes);
app.use("/api/achievements", achievementsRoutes);
app.use(
"/api/pomodoro",
pomodoroRoutes
);
app.use(
  "/api/ai",
  aiRoutes
);
app.get("/", (req, res) => {
  res.json({
    message: "VISTA Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});