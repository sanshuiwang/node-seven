var http = require("http");

http.get("http://m.yuexing.com/?mod=activitys&act=getTopNav2", function (
  response
) {
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
