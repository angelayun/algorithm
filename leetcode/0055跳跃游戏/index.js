/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums == null || !nums.length) {
    return nums;
  }
  let n = nums.length;
  // 最远可达的下标
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (result >= i) {
      result = Math.max(result, i + nums[i]);
    }
  }
  if (result >= n - 1) {
    return true;
  }
  return false;
};
// let nums = [2, 3, 1, 1, 4];
let nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));
