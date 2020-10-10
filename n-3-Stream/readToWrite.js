var fs = require("fs");

var rs = fs.createReadStream("./deepBlue.svg");
var ws = fs.createWriteStream("./deepBlue-ws.svg");

rs.on("data", function (chunk) {
  console.log("READING!!!");

  if (ws.write(chunk) === false) {
    rs.pause();
  }
});

rs.on("end", function () {
  console.log("END!!!");

  ws.end();
});

ws.on("drain", function () {
  console.log("RESUME!!!");
  rs.resume();
});
