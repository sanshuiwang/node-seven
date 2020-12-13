const express = require("express");

const userRouter = require("./router/user_router.js");

const app = express();

// 自定义中间件
function log_middleware(req, res, next) {
  console.log("请求来了 -- app log");
  next();
}
app.use(log_middleware);
app.use("/user", userRouter);
//express自己的中间件：加载一个文件的 static中间件
app.use(
  express.static("static", {
    extensions: ["html", "htm"],
  })
);
//第三方中间件,例: cookie-parser

// /** 中间件完整的结构
//  * 1. 是一个函数
//  * 2. err,req,res,next -->function
//  **/
// function demo_middleware(err, req, res, next) {
//   /**
//    * 1. 异常处理
//    * 2. 处理业务功能然后转交next
//    * 3. 响应请求--结束响应--》当作路由的处理函数
//    **/
// }
// function valid_name_middleware(req, res, next) {
//   let { name } = req.query;
//   console.log("name:: ", name);
//   if (!name || name.trim() === "") {
//     //验证不通过直接，返回值
//     res.json({
//       message: "缺少name参数",
//     });
//   } else {
//     next();
//   }
// }
// // 1. call /test 会进入验证，验证通过进入下一步/test
// app.all("*", valid_name_middleware);
// // 2. 验证通过进入
// app.get("/test", (req, res) => {
//   res.json({
//     message: "初次代码测试",
//   });
// });

app.listen(3000, () => {
  console.log("服务启动成功");
});
