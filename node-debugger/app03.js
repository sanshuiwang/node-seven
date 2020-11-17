const express = require("express");
const app = express();

app.get("/", (req, res) => {
  function b() {
    let m = 1;
    setTimeout(() => {
      m += 1;

      res.send(`Hello ${m}`);
    }, 9000);
  }
  b();
});

app.listen(3000, () => console.log("程序运行在3000端口"));
