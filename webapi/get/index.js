const http = require("http");

const url = require("url");

http
  .createServer((req, res) => {
    console.log("req: ", req);
    console.log(req.url);
    const { query, pathname } = url.parse(req.url, true);
    console.log("pathname:: ", pathname);
    console.log("query:: ", query);
  })
  .listen(8686);
