var fs = require("fs");
var path = require("path");
var http = require("http");

var MIME = {
  ".css": "text/css",
  ".js": "application/javascript",
};

function outputFiles(pathnames, writer) {
  (function next(i, len) {
    if (i < len) {
      var reader = fs.createReadStream(pathnames[i]);

      reader.pipe(writer, { end: false });
      reader.on("end", function () {
        next(i + 1, len);
      });
    } else {
      writer.end();
    }
  })(0, pathnames.length);
}

function validateFiles(pathnames, callback) {
  (function next(i, len) {
    if (i < len) {
      fs.stat(pathnames[i], function (err, stats) {
        if (err) {
          console.log("err:: ", err);
          callback(err);
        } else if (!stats.isFile()) {
          console.log("Error():: ", new Error());
          callback(new Error());
        } else {
          next(i + 1, len);
        }
      });
    } else {
      callback(null, pathnames);
    }
  })(0, pathnames.length);
}

function parseURL(root, url) {
  var base, pathnames, parts;

  if (url.indexOf("??") === -1) {
    url = url.replace("/", "/??");
  }

  parts = url.split("??");
  base = parts[0];
  pathnames = parts[1].split(",").map(function (value) {
    return path.join(root, base, value);
  });

  return {
    mime: MIME[path.extname(pathnames[0])] || "text/plain",
    pathnames: pathnames,
  };
}

function main(argv) {
  var config = JSON.parse(fs.readFileSync(argv[0], "utf-8"));
  var root = config.root || ".";
  var port = config.port || 80;
  var server;

  server = http
    .createServer(function (request, response) {
      var urlInfo = parseURL(root, request.url);

      validateFiles(urlInfo.pathnames, function (err, pathnames) {
        if (err) {
          response.writeHead(404);
          response.end(err.message);
        } else {
          response.writeHead(200, {
            "Content-Type": urlInfo.mime,
          });
          outputFiles(pathnames, response);
        }
      });
    })
    .listen(port, () => {
      console.log(`running on port ${port}`);
    });

  process.on("SIGTERM", function () {
    server.close(function () {
      process.exit(0);
    });
  });
}

main(process.argv.slice(2));
