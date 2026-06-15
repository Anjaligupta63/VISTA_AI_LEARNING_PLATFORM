const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
   completeCourse,
} = require("../controllers/courseController");

router.get("/", authMiddleware, getCourses);

router.get("/:id", authMiddleware, getCourseById);

router.post("/", authMiddleware, createCourse);

router.put("/:id", authMiddleware, updateCourse);

router.delete("/:id", authMiddleware, deleteCourse);
router.put(
  "/complete/:id",
  authMiddleware,
  completeCourse
);
module.exports = router;