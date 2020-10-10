var url = require("url");

console.log(
  url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash")
);

console.log(
  url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash", true)
);

console.log(
  url.parse("//user:pass@host.com:8080/p/a/t/h?query=string#hash", true, true)
);

console.log(
  url.format({
    protocol: "http:",
    host: "www.example.com",
    pathname: "/p/a/t/h",
    search: "query=string",
  })
);

console.log(url.resolve("http://www.example.com/foo/bar", "../baz"));
