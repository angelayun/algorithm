/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n === -1) return 1 / x;
  // 用右移代替了除以2
  let result = myPow(x, n >> 1);
  result *= result;
  // 用位与运算代替了求余运算符来判断一个数是不是奇数还是偶数
  if (n & (0x1 == 1)) {
    result *= x;
  }
  return result;
  //.toFixed(5);
};
// let x = 2.0,
//   n = 10;
// let x = 2.1,
//   n = 3;

// let x = 2.0,
//   n = -2;
let x = 0.44894,
  n = -5;
console.log(myPow(x, n));
//54.83508
