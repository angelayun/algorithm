function find(isFindFirst, nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      if (isFindFirst) {
        if (mid > 0 && nums[mid] == nums[mid - 1]) {
          end = mid - 1;
        } else {
          return mid;
        }
      } else {
        if (mid < nums.length - 1 && nums[mid] == nums[mid + 1]) {
          start = mid + 1;
        } else {
          return mid;
        }
      }
    }
  }
  return -1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums == null || !nums.length) {
    return [-1, -1];
  }
  let first = find(true, nums, target);
  let last = find(false, nums, target);
  return [first, last];
};
/* let nums = [5, 7, 7, 8, 8, 10],
  target = 8; */
/* let nums = [5, 7, 7, 8, 8, 10],
  target = 6; */
let nums = [],
  target = 0;
console.log(searchRange(nums, target));
