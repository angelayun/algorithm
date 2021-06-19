/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 第一版
  /* if (nums == null || val == null) {
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
  return nums.length; */
  /* // 第二版   相对于第一版少了临时变量，简化代码的方案
  if (nums == null || val == null) {
    return 0;
  }
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[index++] = nums[i];
    }
  }
  nums.length = index;
  console.log(nums);
  return index; */
  // 第三版   用双指针方式  前面一个指针指向的值等于target，就用后面指针指向的值覆盖前面一个指针指向的值
  if (nums == null || val == null) {
    return 0;
  }
  let i = 0,
    j = nums.length;
  while (i < j) {
    if (nums[i] == val) {
      nums[i] = nums[j - 1];
      j--;
    } else {
      ++i;
    }
  }
  nums.length = i;
  console.log(nums);
  return i;
};
// let nums = [3, 2, 2, 3],
//   val = 3;
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
console.log(removeElement(nums, val));
