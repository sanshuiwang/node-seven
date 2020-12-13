const express = require("express");

const app = express();

app.get("/demo", (req, res) => {
  try {
    res.json({
      message,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// 2. 中间件也需要异常捕获, 必须要有一个1里边的收口(最终的异常处理)
function demo_middleware_has_error_catch() {
  try {
    //例如mysql操作
  } catch (error) {
    next(error);
  }

  // Promise.then().catch(next)
}

function not_handle_middleware(req, res, next) {
  res.json({
    message: "api不存在",
  });
}

function error_catch_middleware(err, req, res, next) {
  if (err) {
    const { message } = err;
    res.status(500).json({
      message: `${message || "服务器异常"}`,
    });
  } else {
  }
}

//1. app/router 级别 异常捕获中间件
app.use(not_handle_middleware);
app.use(error_catch_middleware);

app.listen(3000, () => {
  console.log("服务启动成功");
});

/**1. app/router 级别 异常捕获中间件
 * 2. 中间件也需要异常捕获
 */
