require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Hello, Noppakun World! hnklcnkjcsdnlclcjkcejkce");
});

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});
