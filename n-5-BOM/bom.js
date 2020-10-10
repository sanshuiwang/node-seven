var fs = require("fs");

function readText(pathname) {
  var bin = fs.readFileSync(pathname);

  console.log(bin);
  if (bin[0] === 0xef && bin[1] === 0xbb && bin[2] === 0xbf) {
    bin = bin.slice(3);
  }
  console.log("bin.slice(3):: ", bin);

  return bin.toString("utf-8");
}

var txt = readText("./bom.txt");
console.log("txt:: ", txt);
