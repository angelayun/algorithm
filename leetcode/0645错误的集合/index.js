/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    while (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
      //第二个判断是防止2个一样的数的不停替换问题
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }
};
// let nums = [1, 2, 2, 4];
let nums = [3, 3, 2, 1, 5];
console.log(findErrorNums(nums));
