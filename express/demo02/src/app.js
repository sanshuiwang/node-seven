const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello word china!");
});
server.listen(3000, "127.0.0.1", () =>
  console.log(`服务启动成功: ${new Date()}`)
);

//配置nodemon

//1. yarn add nodemon -D
//2. 修改package.json启动命令
//   "start": "nodemon src/app.js",
//3. 通过nodemon.json配置watch，监听指定文件的变化
//4. DEBUG=* 先简单知道
