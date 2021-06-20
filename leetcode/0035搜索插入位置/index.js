/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums == null || !nums.length) {
    return -1;
  }
  let begin = 0,
    end = nums.length;
  while (begin <= end) {
    let mid = begin + ((end - begin) >> 1);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      begin = mid + 1;
    } else {
      return mid;
    }
  }
  // 假设有数组[1,2,3....,i-1,i+1,i+2,...]我们要查找的值是i，mid指向i-1时，比i小，所以继续往数组右边找，当找到i+1时，又比i大，于是再往数组左边找，
  // 这时触发了循环终止条件while begin<=end。
  // 循环退出后，begin就指向了i+1的位置，而i+1正是我们要找到的位置(将i放到i+1的位置，然后i+1和后面的元素都往右挪一位，整个数组又有序了)，所以返回begin即可
  return begin;
};
// let nums = [1, 3, 5, 6],
//   target = 5;
let nums = [1, 3, 5, 6],
  target = 7;
console.log(searchInsert(nums, target));
