/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // 双指针 维护窗口的左右端
  let i = 0,
    j = 0;
  // 窗口最长纪录
  let maxLen = 0;
  // 窗口中0的个数
  let zero = 0;
  // 窗口右端越界了就结束
  while (j < nums.length) {
    if (nums[j] == 0) {
      // 新纳入的是0，更新zero 待会要检测0有没有爆表
      zero++;
    }
    while (zero > k) {
      // 0爆表了，左端右移，丢弃元素，直到zero重新等于k
      if (nums[i] == 0) {
        // 如果丢弃是0，更新zero
        zero--;
      }
      i++;
    }
    // 此时窗口是可行解，扩张窗口，优化可行解
    j++;
    if (j - i > maxLen) {
      maxLen = j - i;
    }
  }
  return maxLen;
};
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
console.log(longestOnes(nums, k));
