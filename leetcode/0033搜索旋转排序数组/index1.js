/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums == null || !nums.length) {
    return -1;
  }
  let begin = 0,
    end = nums.length - 1;
  while (begin <= end) {
    let mid = begin + ((end - begin) >> 1);
    if (nums[mid] == target) {
      return mid;
    }
    // 如果左边是有序的
    if (nums[begin] <= nums[mid]) {
      //同时target在[ nums[begin],nums[mid] ]中，那么就在这段有序区间查找
      if (nums[begin] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        //否则去反方向查找
        begin = mid + 1;
      }
      //如果右侧是有序的
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        begin = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
/* let nums = [4, 5, 1, 2, 3],
  target = 1; */
/* let nums = [1, 3],
  target = 3; */
let nums = [5, 1, 3],
  target = 3;
console.log(search(nums, target));
