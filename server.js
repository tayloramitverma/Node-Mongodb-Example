const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "users.html"));
});

app.listen(5004, () => {
  console.log("Server is running on port: ", 5004);
});
