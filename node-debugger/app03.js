const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let a = 3;
  function b() {
    a += 1;
  }
  function c() {
    b();
  }
  c();
  res.send(`Hello ${a}`);
});

app.listen(3000, () => console.log("程序运行在3000端口"));
