const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getDashboardStats,
  getRecentActivity,
  getAnalytics,
  getCourseProgress,
  getPomodoroStats,
} = require(
  "../controllers/dashboardController"
);

router.get(
  "/stats",
  authMiddleware,
  getDashboardStats
);

router.get(
  "/activity",
  authMiddleware,
  getRecentActivity
);

router.get(
  "/analytics",
  authMiddleware,
  getAnalytics
);

router.get(
  "/course-progress",
  authMiddleware,
  getCourseProgress
);

router.get(
  "/pomodoro-stats",
  authMiddleware,
  getPomodoroStats
);

module.exports = router;