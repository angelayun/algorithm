/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /* nums.sort((a, b) => a - b);
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] == target) {
      return [i, j];
    } else if (nums[i] + nums[j] > target) {
      j--;
    } else {
      i++;
    }
  } */
  let hash = {};
  for (let index = 0; index < nums.length; index++) {
    if (hash[target - nums[index]] != null) {
      return [index, hash[target - nums[index]]];
    }
    hash[nums[index]] = index;
  }
};
let nums = [2, 7, 11, 15],
  target = 9;
/* let nums = [3, 2, 4],
  target = 6; */
console.log(twoSum(nums, target));
