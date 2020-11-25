// 读取系统的cpu信息
const os = require("os");
const cpus = os.cpus(); //获取当前cpu数量
console.log("cpus:: ", cpus.length); // 几核电脑会输出几核

//获取内存信息
const total = os.totalmem(); //bytes
console.log("total:: ", total / 1024 / 1024 / 1024); //GB

//当前剩余内存信息
const free = os.freemem();
console.log("free:: ", free / 1024 / 1024 / 1024); //GB

//web 服务
//ajax -> api -> web server(nodejs)
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello");
});
server.listen(3000, () => console.log("服务启动成功"));
