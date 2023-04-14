const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Middleware test one");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware test two");
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(5003, () => {
  console.log("Server is running on port: ", 5003);
});
