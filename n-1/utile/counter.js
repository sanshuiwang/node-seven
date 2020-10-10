var i = 0;

function count() {
  console.log("i:: ", i);

  return ++i;
}

exports.count = count;
