const express = require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  saveSession,
} = require(
  "../controllers/pomodoroController"
);

router.post(
  "/save",
  authMiddleware,
  saveSession
);

module.exports = router;