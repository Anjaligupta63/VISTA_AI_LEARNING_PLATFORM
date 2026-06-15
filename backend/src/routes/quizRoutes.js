const express = require("express");
const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getQuizzes,
  createQuiz,
    deleteQuiz,
} = require(
  "../controllers/quizController"
);

router.get(
  "/:courseId",
  authMiddleware,
  getQuizzes
);

router.post(
  "/:courseId",
  authMiddleware,
  createQuiz
);
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteQuiz
);
module.exports = router;