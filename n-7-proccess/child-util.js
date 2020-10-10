var child_process = require("child_process");
var util = require("util");

function copy(source, target, callback) {
  child_process.exec(util.format("cp -r %s/. %s", source, target), callback);
}

copy("./1", "./1-copy", function (err) {
  console.error(err);
  process.exit(1);
});

console.log(process.argv);

function log() {
  process.stdout.write(util.format.apply(util, arguments) + "\n");
}

log("TEST1:: ", "value");
log("TEST2:: ", "value");

var child = child_process.spawn("node", ["../n-3-Stream/stream.js"]);

child.stdout.on("data", function (data) {
  console.log("stdout: " + data);
});

child.stderr.on("data", function (data) {
  console.log("stderr: " + data);
});

child.on("close", function (code) {
  console.log("child process exited with code " + code);
});
