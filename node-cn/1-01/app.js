const http = require("http");

const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.end("世界你好!!!");
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
