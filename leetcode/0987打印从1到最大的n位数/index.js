/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  if (n <= 0) {
    return;
  }
  let number = [];
  for (let i = 0; i < 10; i++) {
    number[0] = i + "0";
  }
  // TODO
};
let n = 1;
console.log(printNumbers(n));
