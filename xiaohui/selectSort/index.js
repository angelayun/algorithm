function selectSort(nums) {
  // 轮数
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    // 第0轮的时候  跟后面从第1个元素开始比较
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
        // 记录下当前轮最小的元素index
      }
    }
    // 把当前轮最小的元素交换过来
    if (minIndex != i) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }
  return nums;
}
// let nums = [3, 4, 2, 1, 5, 6, 7, 8, 30, 50, 1, 33, 24, 5, -4, 7, 0];
let nums = [12, 1, 3, 46, 5, 0, -3, 12, 35, 16];
console.log(selectSort(nums));
