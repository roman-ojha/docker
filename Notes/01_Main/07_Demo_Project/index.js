const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/profile-picture", (req, res) => {
  var img = fs.readFileSync("assets/user.jpg");
  res.writeHead(200, { "Content-Type": "image/jpg" });
  return res.end(img, "binary");
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
