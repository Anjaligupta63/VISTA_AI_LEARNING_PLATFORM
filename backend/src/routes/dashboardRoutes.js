const express = require("express");

const router =
  express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getDashboardStats,
  getRecentActivity,
    getAnalytics,
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
module.exports = router;