var fs = require("fs");

function copy(src, dst) {
  // 一次性把内容读取到内存后再一次性写入磁盘
  fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
  copy(argv[0], argv[1]);
}

console.log("argv", process.argv);
// argv [
//     '/usr/local/bin/node', ---> NodeJS执行程序的绝对路径
//     '/Users/gaoyali-iris/Documents/ang/node-seven/n-copy/smallCopy.js', ---> 执行的主模块的绝对路径
//     './smallCopy.js', ---> 将要被拷贝文件资源
//     './small-copy-0.js' ---> 拷贝得到的文件
//   ]

main(process.argv.slice(2));

// node smallCopy.js ./smallCopy.js ./small-copy-0.js
