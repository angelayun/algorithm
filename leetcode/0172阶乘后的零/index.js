/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 看下面这篇文章的解释
  // https://leetcode-cn.com/problems/factorial-trailing-zeroes/solution/shu-yi-shu-you-ji-ge-wu-by-striver-wb-gsek/
  let init = 5;
  let res = 0;
  while (init <= n) {
    // 为了确定最后有多少个零，我们应该看有多少对 2 和 5 的因子
    res += Math.floor(n / init);
    init *= 5;
  }
  return res;
  // 下面是另外一种解法
  let r = 0;
  while (n > 1) {
    n = parseInt(n / 5);
    r += n;
  }
  return r;
};
// let n = 3;
// let n = 5;
let n = 10;
// let n = 15;
// let n = 20;
// let n = 25;
// let n = 30;
// let n = 35;
// let n = 40;
// let n = 45;
// let n = 50;
// let n = 55;
// let n = 60;
// let n = 65;
// let n = 70;
// let n = 75;
// let n = 80;
// let n = 85;

console.log(trailingZeroes(n));
