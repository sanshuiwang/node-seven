const express = require("express");

const app = express();

// //1. 通过请求的方法类型 get/post/put/delete
// app.get("/demo", (req, res) => {
//   //req:请求对象
//   //res:服务响应对象
//   res.json({
//     message: "hello express route from get demo",
//   });
// });

// app.post("/demo", (req, res) => {
//   //req:请求对象
//   //res:服务响应对象
//   res.json({
//     message: "hello express route from post demo",
//   });
// });

// //2. 通过uri
// app.get("/user/byname", (req, res) => {
//   let { name } = req.query;
//   res.json({
//     name,
//   });
// });
// app.get("/user/byid", (req, res) => {
//   let { id } = req.query;
//   res.json({
//     id,
//   });
// });

// app.use("/allUse", (req, res) => {
//   res.json({
//     message: "demo-all-use",
//     method: req.method,
//   });
// });

// app.use((req, res) => {
//   res.json({
//     message: "from use",
//     method: req.method,
//     uri: req.path,
//   });
// });

// // app.all 无论通过什么请求方式(get/post/delete/put)都可以响应
// app.all("/all", (req, res) => {
//   res.json({
//     message: "demo-all",
//     method: req.method,
//   });
// });

// // app.all 无论通过什么请求方式(get/post/delete/put)都可以响应
// app.all("*", (req, res) => {
//   res.json({
//     message: "all *",
//     method: req.method,
//     uri: req.path,
//   });
// });

app.listen(3000, () => {
  console.log("服务启动成功");
});
