const express = require("express");
const router = express.Router();

// base router
router.get("/", (req, res, next) => {
  res.write("This API is working");
  res.end();
});

module.exports = router;
