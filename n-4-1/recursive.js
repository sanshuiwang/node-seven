function recursive(n) {
  if (n === 1) {
    return n;
  } else {
    return n + recursive(--n);
  }
}

console.log("recursive(5):: ", recursive(5));
