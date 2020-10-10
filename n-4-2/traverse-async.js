var fs = require("fs");
var path = require("path");

function traverse(dir, callback, finish) {
  fs.readdir(dir, function (err, files) {
    (function next(i) {
      if (i < files.length) {
        var pathname = path.join(dir, files[0]);
        fs.stat(pathname, function (err, stats) {
          if (stats.isDirectory()) {
            traverse(pathname, callback, function () {
              next(i + 1);
            });
          } else {
            callback(pathname, function () {
              next(i + 1);
            });
          }
        });
      } else {
        finish && finish();
      }
    })(0);
  });
}

traverse(
  "../",
  function (pathname, callback) {
    console.log("pathname:: ", pathname);
    var fileSize = fs.statSync(pathname).size;
    console.log("fileSize:: ", `${fileSize} B`);
    callback();
  },
  function () {
    console.log("END!!!");
  }
);
