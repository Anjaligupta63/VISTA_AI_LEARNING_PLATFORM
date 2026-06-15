const express = require("express");
const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getFlashcards,
  createFlashcards,
   deleteFlashcard,
} = require(
  "../controllers/flashcardController"
);

router.get(
  "/:courseId",
  authMiddleware,
  getFlashcards
);

router.post(
  "/:courseId",
  authMiddleware,
  createFlashcards
);
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteFlashcard
);
module.exports = router;