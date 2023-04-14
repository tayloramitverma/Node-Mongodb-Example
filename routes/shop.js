const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is shop root route!");
});

router.get("/users", (req, res) => {
  res.send("This is shop user route!");
});

module.exports = router;
