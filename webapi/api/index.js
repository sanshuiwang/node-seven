const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");

let user = {
  admin: "123456",
};

http
  .createServer((req, res) => {
    const method = req.method;
    console.log("method", method);
    let path = "";
    let get = {};
    let post = {};
    if (method === "GET") {
      const { query, pathname } = url.parse(req.url, true);
      path = pathname;
      get = query;
      complete();
    } else if (method === "POST") {
      let arr = [];
      path = req.url;
      req.on("data", (buffer) => {
        arr.push(buffer);
      });
      req.on("end", () => {
        post = querystring.parse(Buffer.concat(arr).toString());
        complete();
      });
    }

    function complete() {
      if (path === "/login") {
        let { username, password } = get;
        if (!user[username]) {
          res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
          res.end(JSON.stringify({ err: 1, msg: "用户名不存在" }));
        } else if (user[username] !== password) {
          res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
          res.end(JSON.stringify({ err: 1, msg: "密码错误" }));
        } else {
          res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
          res.end(JSON.stringify({ err: 0, msg: "登录成功" }));
        }
      } else if (path === "/reg") {
        let { username, password } = post;
        if (user[username]) {
          res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
          res.end(JSON.stringify({ err: 1, msg: "账户已经存在" }));
        } else {
          user[username] = password;
          res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
          res.end(JSON.stringify({ err: 0, msg: "注册成功" }));
        }
      } else {
        fs.readFile(`./www/${path}`, (err, data) => {
          if (err) {
            console.log("err:", err);
            res.writeHead(404);
            res.end(JSON.stringify(err));
          } else {
            res.end(data);
          }
        });
      }
    }
  })
  .listen(20000);
