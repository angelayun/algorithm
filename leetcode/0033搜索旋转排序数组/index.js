let binarySearch = function (nums, begin, end, target) {
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
  return -1;
};
// 找到最小值的下标
let findMin = function (nums) {
  let begin = 0,
    end = nums.length - 1;
  //如果第一个值比最后一个值小，说明整个数组是有序的
  if (nums[begin] <= nums[end]) {
    return begin;
  }
  while (begin <= end) {
    let mid = begin + ((end - begin) >> 1);
    //前一个值比后一个值大，找到了旋转点
    if (mid < nums.length - 1 && nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }
    //中间点大于等于第一个元素，左半边是有序的，转去右边查找
    if (nums[mid] >= nums[0]) {
      begin = mid + 1;
    } else {
      //左边是无序的，继续在左边查找
      end = mid - 1;
    }
  }
  return 0;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums == null || !nums.length) {
    return -1;
  }
  //查找最小值的下标
  let minIndex = findMin(nums);
  //如果最小值下标为0，说明整个数组是有序的
  if (minIndex == 0) {
    return binarySearch(nums, 0, nums.length - 1, target);
  }
  //最终结果在[0,min_index-1]中
  if (nums[0] <= target) {
    return binarySearch(nums, 0, minIndex, target);
  }
  //最终结果在[min_index-1,length-1]中
  return binarySearch(nums, minIndex, nums.length - 1, target);
};
/* let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0; */
/* let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 3; */
/* let nums = [1],
  target = 0; */
/* let nums = [5, 1, 3],
  target = 0; */
/* let nums = [5, 1, 3],
  target = 5; */
let nums = [4, 5, 1, 2, 3],
  target = 1;
console.log(search(nums, target));
