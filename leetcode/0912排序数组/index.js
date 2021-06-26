/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 第一版本冒泡排序
  /* for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  } */
  // 第二版本冒泡排序
  /* for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  } */
  // 优化后的冒泡排序
  /* for (let i = 0; i < nums.length - 1; i++) {
    // 有序标记，每一轮的初始值都为true
    let isSorted = true;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        // 因为有元素进行交换，所以不是有序的，标记为false
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
  } */
  // 优化后的第二版冒泡排序
  let lastExchangeIndex = 0;
  // 无序数列的边界，在每一轮排序过程中，处于sortBorder之后的元素就不需要再进行比较了
  let sortBorder = nums.length - 1;
  for (let i = 0; i < nums.length - 1; i++) {
    // 有序标记，每一轮的初始值都为true
    let isSorted = true;
    for (let j = 0; j < sortBorder; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        // 因为有元素进行交换，所以不是有序的，标记为false
        isSorted = false;
        // 更新最后一次交换元素的位置
        lastExchangeIndex = j;
      }
    }
    sortBorder = lastExchangeIndex;
    if (isSorted) {
      break;
    }
  }
  return nums;
};
// let nums = [5, 2, 3, 1];
let nums = [5, 1, 1, 2, 0, 0];
console.log(sortArray(nums));
