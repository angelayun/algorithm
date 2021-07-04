/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums == null || !nums.length) {
    return -1;
  }
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;
let nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
console.log(search(nums, target));
