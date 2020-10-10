var querystring = require("querystring");

console.log(querystring.parse("foo=bar&baz=qux&baz=quux&corge"));
console.log(
  querystring.stringify({ foo: "bar", baz: ["qux", "quux"], corge: "" })
);
