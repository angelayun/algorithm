/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let a of nums) {
    result ^= a;
  }
  return result;
};
let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
