let isEven = (n) => {
  // 奇数的最低位为1
  return (n & 1) == 0;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (nums == null || !nums.length) {
    return nums;
  }
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    // 指向的是偶数
    while (i < j && !isEven(nums[i])) {
      i++;
    }
    // 指向的是奇数
    while (i < j && isEven(nums[j])) {
      j--;
    }
    if (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
  return nums;
};
// let nums = [1, 2, 3, 4];
let nums = [2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1];
console.log(exchange(nums));
