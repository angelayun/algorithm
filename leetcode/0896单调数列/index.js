/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let asc = true;
  let desc = true;
  for (let i = 1; i < nums.length && (asc || desc); i++) {
    // 如果是升序
    asc = asc && nums[i - 1] <= nums[i];
    // 如果是降序
    desc = desc && nums[i - 1] >= nums[i];
  }
  return asc || desc;
};

let nums = [1, 2, 2, 3];
console.log(isMonotonic(nums));
