const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my app : Version-1");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(80, () => {
  console.log("listening on 80");
});
