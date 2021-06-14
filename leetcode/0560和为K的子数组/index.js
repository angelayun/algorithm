/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  /* let count = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end >= 0; end--) {
      sum += nums[end];
      if (sum == k) {
        count++;
      }
    }
  }
  return count; */
  /* const mp = new Map();
  mp.set(0, 1);
  let count = 0,
    pre = 0;
  for (const a of nums) {
    pre += a;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
  }
  return count; */
};
let nums = [3, 4, 7, 2, -3, 1, 4, 2];
let k = 7;
/* let nums = [1, 1, 1],
  k = 2; */
console.log(subarraySum(nums, k));
