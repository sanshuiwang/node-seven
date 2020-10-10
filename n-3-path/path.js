var path = require("path");

var cache = {};

function store(key, value) {
  console.log("key:: ", key);

  const ptUtil = key.replace(/\\/g, "/"); // replace统一系统的斜杠
  console.log("ptUtil:: ", ptUtil);

  const pt = path.normalize(ptUtil);

  console.log("pt:: ", pt);

  cache[pt] = value;
}

store("foo/bar", 1);
store("foo//baz//../bar", 2);
store("foo\\baz\\..\\bar", 3);
console.log(cache); // => { "foo/bar": 3 }

var pJoin = path.join("foo/", "baz/", "../bar");
console.log("pJoin:: ", pJoin);

var pExtname = path.extname("foo/bar.js");
console.log("pExtname:: ", pExtname);
