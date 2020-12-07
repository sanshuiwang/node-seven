const express = require("express");

const app = express();

const memberRouter = require("./member.router");
const skuRouter = require("./sku.router");

app.use("/member", memberRouter);
app.use("/sku", skuRouter);

app.listen(3000, () => {
  console.log("服务启动成功");
});
