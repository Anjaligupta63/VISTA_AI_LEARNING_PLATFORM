const express =
require("express");
const path = require("path");

console.log(__dirname);
const router =
express.Router();

const authMiddleware =
require(
"../middleware/authMiddleware"
);

const {
getAchievements,
} = require(
"../controllers/achievementsController"
);

router.get(
"/",
authMiddleware,
getAchievements
);

module.exports =
router;
