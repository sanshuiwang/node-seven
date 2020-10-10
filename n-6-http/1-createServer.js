var http = require("http");

http
  .createServer(function (request, response) {
    console.log("method:: ", request.method);
    console.log("header:: ", request.headers);

    response.writeHead(200, { "Content-Type": "text-plain" });
    response.end("Hello World\n");
  })
  .listen(8888);
