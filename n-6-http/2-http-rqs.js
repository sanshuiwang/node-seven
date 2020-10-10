var http = require("http");

http
  .createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on("data", function (chunk) {
      console.log("chunk:: ", chunk);
      body.push(chunk);
    });

    request.on("end", function () {
      body = Buffer.concat(body);
      console.log(body.toString());
    });
  })
  .listen(80);
