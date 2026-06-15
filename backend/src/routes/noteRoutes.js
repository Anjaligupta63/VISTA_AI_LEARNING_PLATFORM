const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getNotes,
  createNote,
  deleteNote,
} = require("../controllers/noteController");

router.get(
  "/:courseId",
  authMiddleware,
  getNotes
);

router.post(
  "/:courseId",
  authMiddleware,
  createNote
);

router.delete(
  "/delete/:id",
  authMiddleware,
  deleteNote
);

module.exports = router;