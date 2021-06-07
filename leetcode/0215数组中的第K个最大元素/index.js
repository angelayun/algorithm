/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let other = [];
  for (let index = 0; index < k - 1; index++) {
    other.push(nums[index]);
  }
  other.sort((a, b) => a - b);
  console.log(other);
  for (let index = k - 1; index < nums.length; index++) {
    const element = array[index];
    // TODO 看别人写再试  自己得不出最优的
    // if(element<)
  }
};
let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;
console.log(findKthLargest(nums, k));
