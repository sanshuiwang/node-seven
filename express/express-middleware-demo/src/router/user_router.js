const express = require("express");

const router = express.Router();

// 1. 在路由外使用
router.use(function (req, res, next) {
  console.log("log from user router");
  next();
});

function valid_login_params(req, res, next) {
  let { name, password } = req.query;
  if (!name || !password) {
    res.json({
      message: "参数校验失败",
    });
  } else {
    req.middleParams = {
      name,
      password,
    };
    next();
  }
}

// 2. 在路由内使用
router.get(
  "/demo",
  [
    valid_login_params,
    /** middleware */
  ],
  (req, res) => {
    const { middleParams } = req;
    res.json({
      middleParams,
      message: "from router demo",
    });
  }
);

module.exports = router;
