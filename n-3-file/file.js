var fs = require("fs");

fs.stat("./deepBlue.svg", function (error, stats) {
  console.log("stats:: ", stats);
});

fs.readFile("./deepBlue.svg", function (error, data) {
  if (error) {
    console.error("error:: ", error);
  } else {
    console.log("data:: ", data);
  }
});

try {
  var data = fs.readFileSync("./deepBlue.svg");
  console.log("data- :: ", data);
} catch (err) {
  // Deal with error.
}
