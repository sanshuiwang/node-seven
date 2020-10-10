var fs = require("fs");
var iconv = require("iconv-lite");
var bin = fs.readFileSync("./bom.txt");

function readGBKText() {
  return iconv.decode(bin, "gbk"); // Buffer ->> gbk
}

var txt = readGBKText();
console.log("txt: ", txt);
console.log("txt-utf-8:: ", iconv.decode(bin, "utf-8"));
