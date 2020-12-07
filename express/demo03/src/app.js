const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.json({
//     name: "汪洋",
//   });
// });

app.get("/name/:age", (req, res) => {
  let { age } = req.params;
  res.json({
    name: "Ocean",
    age,
  });
});

app.post("/name", (req, res) => {
  res.send("汪洋&Ocean/post");
});

app.listen(3000, () => {
  console.log("服务启动成功");
});
