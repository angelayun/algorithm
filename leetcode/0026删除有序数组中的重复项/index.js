/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums == null || !nums.length) {
    return 0;
  }
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
