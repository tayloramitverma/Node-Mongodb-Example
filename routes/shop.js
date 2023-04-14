const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send("This is user route!");
});

router.get("/", (req, res) => {
  res.send("This is root route!");
});

module.exports = router;
