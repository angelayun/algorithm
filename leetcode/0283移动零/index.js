/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 思路 i指针指向的是所有非0的元素
  let i = 0,
    j = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
    i++;
  }
  return nums;
};
let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
