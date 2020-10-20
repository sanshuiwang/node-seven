const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const a = 3;
  res.send("Hello Word!!!");
});

app.listen(3000, () => console.log("程序运行在3000端口"));
