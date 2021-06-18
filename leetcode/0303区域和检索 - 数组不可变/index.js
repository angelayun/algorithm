/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const preSum = new Array(nums.length + 1);
  preSum[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }
  this.preSum = preSum;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
let nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
// console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
