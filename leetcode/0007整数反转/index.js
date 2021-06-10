/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);
  while (x) {
    res = res * 10 + (x % 10);
    if (res > max || res < min) {
      return 0;
    }
    // 取整
    x = ~~(x / 10);
  }
  return res;
};
// let x = 123;
// let x = -123;
// let x = 120;
let x = 0;
console.log(reverse(x));
// TODO  这个题目是否有最优解
