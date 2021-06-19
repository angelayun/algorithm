// 另外一种写法
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // 根据数组的值找到对应的下标  把对应数组下标的值置为负数
    let index = Math.abs(nums[i]) - 1;
    nums[index] = Math.abs(nums[index]) * -1;
  }
  let result = [];
  /*   for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      result.push(i);
    }
  } */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
