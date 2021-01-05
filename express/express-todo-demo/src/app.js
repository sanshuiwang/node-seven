const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/**
 * 1. 所有的错误，http status 500
 */

/**查询任务列表 */
app.get("/list/:status/:page", async (req, res, next) => {
  res.json({
    list: [],
  });
});

/**新增一个任务 */
app.post("/create", async (req, res, next) => {
  let { name, deadline, content } = req.body;
  res.json({
    name,
    deadline,
    content,
  });
});

/**编辑一个任务 */
app.post("/update", async (req, res, next) => {
  let { name, deadline, content, id } = req.body;
  res.json({
    name,
    deadline,
    content,
    id,
  });
});

/**修改一个任务状态或删除， ID/status */
app.post("/update_status", async (req, res, next) => {
  let { id, status } = req.body;
  res.json({
    id,
    status,
  });
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("服务启动成功");
});
