/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode-cn.com/problems/find-the-duplicate-number/solution/zhe-ge-shu-zu-you-dian-te-shu-suo-yi-ke-yi-yong-ku/
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]]; // slow跳一步，fast跳两步
    if (slow == fast) {
      // 指针第一次相遇
      fast = 0; // 让快指针回到起点
      while (true) {
        // 开启新的循环，  找入环点

        if (slow == fast) {
          // 如果再次相遇，就肯定是在入口处
          return slow; // 返回入口，即重复的数
        }
        slow = nums[slow]; // 两个指针每次都进1步
        fast = nums[fast];
      }
    }
  }
};
// let nums = [1, 3, 4, 2, 2];
let nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums));
