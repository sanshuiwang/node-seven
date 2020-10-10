var http = require("http");

setInterval(() => {
  http.get("http://127.0.0.1:80", function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on("data", function (chunk) {
      console.log(chunk);

      body.push(chunk);
    });

    response.on("end", function () {
      body = Buffer.concat(body);
      console.log(body.toString());
    });
  });
}, 1000);
