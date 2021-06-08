/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    ++count;
    n = (n - 1) & n;
  }
  return count;
};
// let n = 0b111;
// let n = 0b1011;
let n = 0b10000000;
console.log(hammingWeight(n));
