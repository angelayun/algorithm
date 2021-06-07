/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 先排序
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    // 相邻元素相同时
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    // 化为two sum 问题
    let temp = twoSum(nums, i + 1, len - 1, -nums[i], nums[i]);
    console.log({ i, value: nums[i], temp });
    result = result.concat(temp);
  }
  return result;
};
var twoSum = function (nums, start, end, target, value) {
  let result = [];
  while (start < end) {
    var sum = nums[start] + nums[end];
    if (sum == target) {
      result.push([value, nums[start], nums[end]]);
      while (start < end && nums[start] == nums[start + 1]) {
        start++;
      }
      start++;
      while (start < end && nums[end] == nums[end - 1]) {
        end++;
      }
      end--;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return result;
};

// let nums = [-1, 0, 1, 2, -1, -4];
let nums = [-1, 0, 1, 2, -1, -4, -2, -3, -4, -5, -6, 5, 6];
let result = threeSum(nums);
console.log(result);
