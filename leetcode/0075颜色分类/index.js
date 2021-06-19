/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums == null || !nums.length) {
    return nums;
  }
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  for (let j = i; j < nums.length; j++) {
    if (nums[j] == 1) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
};

let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
