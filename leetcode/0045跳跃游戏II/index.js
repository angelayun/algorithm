/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 记录当前能去到的最远的位置，遍历每个点都会求能跳到的最远位置，与它比较，如果比它大就更新它
  let farthestPos = 0;
  let endOfCanReach = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthestPos = Math.max(farthestPos, i + nums[i]);
    if (i == endOfCanReach) {
      endOfCanReach = farthestPos;
      steps++;
    }
    if (endOfCanReach >= nums.length - 1) {
      break;
    }
  }
  return steps;
};
let nums = [2, 3, 1, 1, 4];
// let nums = [2, 3, 0, 1, 4];
console.log(jump(nums));
