const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {
  generateCertificate,
} = require(
  "../controllers/certificateController"
);

router.get(
  "/",
  authMiddleware,
  generateCertificate
);

module.exports = router;