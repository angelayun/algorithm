var reversePairs = function (nums) {
  // 没有元素，没有翻转对
  if (nums.length == 0) {
    return 0;
  }
  // 翻转对个数
  let count = 0;
  // 对当前的序列（start到end）进行归并排序
  function mergeSort(nums, start, end) {
    // 递归的出口：不能再二分了，返回
    if (start == end) {
      return 0;
    }
    // 当前序列的中点索引
    const mid = start + ((end - start) >> 1);
    // 递归左序列
    mergeSort(nums, start, mid);
    // 递归右序列
    mergeSort(nums, mid + 1, end);
    // 此时左右序列已升序，现在做：合并前的统计、以及合并
    // 左序列的开头
    let i = start;
    // 右序列的开头
    let j = mid + 1;
    // i j 都不越界
    while (i <= mid && j <= end) {
      if (nums[i] > 2 * nums[j]) {
        // i 到 mid，都ok
        count += mid - i + 1;
        // 考察下一个j，继续找 i
        j++;
      } else {
        i++;
      }
    }
    // 复原 i j 指针，因为现在要合并左右序列
    i = start;
    j = mid + 1;
    // 辅助数组，存放合并排序的数
    const temp = new Array(end - start + 1);
    let index = 0;
    while (i <= mid && j <= end) {
      if (nums[i] < nums[j]) {
        temp[index] = nums[i];
        index++;
        i++;
      } else {
        temp[index] = nums[j];
        index++;
        j++;
      }
    }
    while (i <= mid) {
      // i 和 i右边的都取过来
      temp[index] = nums[i];
      index++;
      i++;
    }
    while (j <= end) {
      // j 和 j右边的都取过来
      temp[index] = nums[j];
      index++;
      j++;
    }
    for (let i = start, k = 0; i <= end; i++, k++) {
      nums[i] = temp[k];
    }
  }
  // 归并的范围：0到末尾
  mergeSort(nums, 0, nums.length - 1);

  return count;
};
// let nums = [1, 3, 2, 3, 1];
let nums = [2, 4, 3, 5, 1];
console.log(reversePairs(nums));
