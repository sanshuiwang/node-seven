var fs = require("fs");

var rs = fs.createReadStream("./deepBlue.svg");

function doSomething(chunk, callback) {
  console.log("chunk:: ", chunk);
  callback();
}

rs.on("data", function (chunk) {
  console.log("READING!!!");
  rs.pause();
  doSomething(chunk, function () {
    rs.resume();
  });
});

rs.on("end", function () {
  console.log("END!!!!");
});
