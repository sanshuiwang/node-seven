const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const m = 2;
  const v = 0;
  res.send(`Hello World!!!`);
});

app.listen(3000, () => console.log("3000"));
