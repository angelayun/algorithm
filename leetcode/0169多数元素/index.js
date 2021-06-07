/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let target;
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == target) {
      count++;
    } else if (count == 0) {
      target = nums[index];
      count++;
    } else {
      count--;
    }
  }
  return target;
};
// let nums = [2, 2, 1, 1, 1, 2, 2];
let nums = [3, 2, 3];
let result = majorityElement(nums);
console.log(result);
