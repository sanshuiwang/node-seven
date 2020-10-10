var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
console.log("bin:: ", bin);
console.log("bin - length:: ", bin.length);
console.log("bin[0]:: ", bin[0]);

var str = bin.toString("utf-8");
console.log("str:: ", str);

var strBin = new Buffer("hello", "utf-8");
console.log("strBin:: ", strBin);

bin[0] = 0x48;
console.log("bin[0] - 0x48:: ", bin);
console.log("bin[0] - 0x48 - str:: ", bin.toString("utf-8"));

var sub = bin.slice(2);
sub[0] = 0x65;
console.log("sub[2] - 0x65 - bin:: ", bin);

var copyBuffer = new Buffer(bin.length);
bin.copy(copyBuffer);
console.log("bin:: ", bin);
console.log("copy - bin:: ", copyBuffer);
