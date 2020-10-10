var fs = require("fs");

//binary 可以使背后的字节保持不变. replace什么编码输出还是什么编码
function replace(pathname) {
  var str = fs.readFileSync(pathname, "binary");
  console.log("str1:: ", str);

  str = str.replace("foo", "bar");

  console.log("str2:: ", str);
  fs.writeFileSync(pathname, str, "binary");
}

replace("./binary-txt.js");
