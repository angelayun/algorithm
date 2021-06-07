/**
 * 找出数组中重复的数字
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  if (nums == null || nums.length < 0) {
    return -1;
  }
  for (let i = 0, length = nums.length; i < length; i++) {
    if (nums[i] < 0 || nums[i] > length - 1) {
      return -1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i) {
      if (nums[i] == nums[nums[i]]) {
        return nums[i];
      }
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
};
// let nums = [2, 4, 3, 1, 4];
let nums = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums));
