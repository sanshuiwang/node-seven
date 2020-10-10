const http = require("http");

const url = require("url");

const queryString = require("querystring");

http
  .createServer((req, res) => {
    console.log(req.url);

    let result = [];
    req.on("data", (buffer) => {
      result.push(buffer);
    });
    req.on("end", () => {
      let data = Buffer.concat(result);
      console.log(data);
      const dts = data.toString();
      console.log(dts); //文件不能toString
      console.log(queryString.parse(dts));
    });
  })
  .listen(8686);
