/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    if ((n & 1) != 0) {
      count++;
    }
    n = n >>> 1;
  }
  return count;
};
// 有符号右移 a >> b 将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位。
// 无符号右移 a >>> b 将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位，并使用 0 在左侧填充。
// let n = 0b10000000;
// let n = 0b111;
// let n = 0b1011;
let n = 0b11111111111111111111111111111101;
console.log(hammingWeight(n));
