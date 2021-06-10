/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits == null || !digits.length) {
    return 0;
  }
  // let num = +digits.join("");
  // debugger;
  // num++;
  // return num.toString().split("");
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    // 逐步 进位
    if (digits[i] != 0) return digits;
  }
  // 多一位数字位的情况
  digits = [...Array(len + 1)].map((_) => 0);
  digits[0] = 1;
  return digits;
};
// let digits = [1, 2, 3];
// let digits = [4, 3, 2, 1];
// let digits = [0];
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits));
