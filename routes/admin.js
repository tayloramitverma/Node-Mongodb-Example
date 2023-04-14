const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send(`<form method="POST" action="/admin/product">
      <input name="title" />
      <button type="submit">Submit</button>
      </form>`);
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/users");
});

module.exports = router;
