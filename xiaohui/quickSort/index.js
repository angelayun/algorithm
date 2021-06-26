function quickSort(nums, startIndex, endIndex) {
  // 递归结束条件：startIndex大等于endIndex的时候
  if (startIndex >= endIndex) {
    return;
  }
  // 得到基准元素位置
  let pivotIndex = partition(nums, startIndex, endIndex);
  // 根据基准元素，分成两部分递归排序   这里是减1和加1的关系  因为中间一个元素已经有序了
  quickSort(nums, startIndex, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, endIndex);
}
/* // 双边循环法
function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素（也可以选择随机位置）
  let pivot = arr[startIndex];
  let left = startIndex,
    right = endIndex;
  while (left != right) {
    //控制right指针比较并左移
    while (left < right && arr[right] > pivot) {
      right--;
    }
    //控制left指针比较并右移
    while (left < right && arr[left] <= pivot) {
      left++;
    }
    //交换left和right指向的元素
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  //pivot和指针重合点交换
  arr[startIndex] = arr[left];
  arr[left] = pivot;
  return left;
} */
// 单边循环法
function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素（也可以选择随机位置）
  let pivot = arr[startIndex];
  // 设置一个mark指针指向数组起始位置 -- 最终  这个mark指针代表小于基准元素的区域边界
  let mark = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark++;
      [arr[mark], arr[i]] = [arr[i], arr[mark]];
    }
  }
  arr[startIndex] = arr[mark];
  arr[mark] = pivot;
  return mark;
}
let arr = [4, 4, 6, 5, 3, 2, 8, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
