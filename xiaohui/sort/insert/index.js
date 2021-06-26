function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let insertValue = nums[i];
    let j = i - 1;
    //从右向左比较元素的同时，进行元素复制
    for (; j >= 0 && insertValue < nums[j]; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = insertValue;
  }
  return nums;
}
let nums = [3, 4, 2, 1, 5, 6, 7, 8, 30, 50, 1, 33, 24, 5, -4, 7, 0];
// let nums = [12, 1, 3, 46, 5, 0, -3, 12, 35, 16];
console.log(insertSort(nums));
