/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // 如果1不存在于nums数组中
  if (nums.indexOf(1) < 0) {
    return 1;
  }
  // 将负数 0 及 大于数组长度的值  全部替换为0
  let len = nums.length;
  for (let index = 0; index < len; index++) {
    if (nums[index] <= 0 || nums[index] > len) {
      nums[index] = 1;
    }
  }
  // 循环数组  当某个数字出现的话  那对应索引位的值就置反  变为对应的负数
  for (let index = 0; index < len; index++) {
    // 因为数组的索引位置是从0开始  所以  下面这句话要 -1
    let a = Math.abs(nums[index]) - 1; // 这里为什么要加abs 是因为下面一句话有可能会把数组项值弄成负数
    nums[a] = -Math.abs(nums[a]);
  }
  for (let index = 0; index < len; index++) {
    const element = nums[index];
    if (element > 0) {
      // 返回数组下标从1开始计数
      return index + 1;
    }
  }
  return len + 1;
};
// let nums = [1, 2, 0];
// let nums = [3, 4, -1, 1];
let nums = [7, 8, 9, 11, 12];
let result = firstMissingPositive(nums);
console.log(result);
