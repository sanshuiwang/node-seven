process.on("message", function (msg) {
  console.log(msg);
  msg.hello = msg.hello.toUpperCase();
  process.send(msg);
});
