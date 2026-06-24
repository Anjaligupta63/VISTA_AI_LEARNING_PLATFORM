const express = require("express");
const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getProfile,
  getProfileStats,
} = require("../controllers/userController");

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

router.get(
  "/profile-stats",
  authMiddleware,
  getProfileStats
);

module.exports = router;