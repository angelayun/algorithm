/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let temp = 1;
  while (temp <= n) {
    if (temp == n) {
      return true;
    }
    // 左移比乘以2效率上更快
    // n = n * 2;
    n = n << 1;
  }
  return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & -n) == n;
  // 或者下面这种
  return n > 0 && (n & (n - 1)) == 0;
};

// let n = 8;
// let n = 3;
let n = 0;
console.log(isPowerOfTwo(n));
