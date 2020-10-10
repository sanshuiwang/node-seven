const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log(req.url);
    fs.readFile(`./${req.url}`, (err, data) => {
      if (err) {
        console.log("err:", err);
        res.writeHead(404);
        res.end(JSON.stringify(err));
      } else {
        res.end(data);
      }
    });
  })
  .listen(8888);
