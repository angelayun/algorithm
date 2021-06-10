/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums == null || val == null) {
    return 0;
  }
  let index = 0;
  let deleteNums = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      deleteNums++;
    } else {
      nums[index++] = nums[i];
    }
  }
  nums.length = nums.length - deleteNums;
  console.log(nums);
  return nums.length;
};
let nums = [3, 2, 2, 3],
  val = 3;
// let nums = [0, 1, 2, 2, 3, 0, 4, 2],
//   val = 2;
console.log(removeElement(nums, val));
