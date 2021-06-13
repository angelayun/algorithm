/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 跟剑指offer 15题  一模一样   两种解法  可以看一下
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    // 让 n 和 00...001 求 & ：如果结果为 0，说明 n 的最低位为 0，如果结果不为 0，说明 n 的最低位为 1
    if ((n & 1) != 0) {
      count++;
    }
    // 右移一位，最低位溢出而舍弃
    // 因为题目的原话是输入是一个无符号整数（以二进制串的形式）  所以这里用无符号右移
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
