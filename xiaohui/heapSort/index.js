// 下沉节点
function downAdjust(arr, parentIndex, length) {
  let tmp = arr[parentIndex];
  // 默认是定位到左孩子
  let childIndex = 2 * parentIndex + 1;
  while (childIndex < length) {
    // 如果有右孩子 且右孩子大于左孩子的值，则定位到右孩子
    if (childIndex + 1 < length && arr[childIndex + 1] > arr[childIndex]) {
      childIndex++;
    }
    // 如果父节点大于任何一个孩子的值，则直接跳出
    if (tmp >= arr[childIndex]) {
      break;
    }
    arr[parentIndex] = arr[childIndex];
    parentIndex = childIndex;
    childIndex = 2 * childIndex + 1;
  }
  arr[parentIndex] = tmp;
}
function heapSort(arr) {
  // 1.把无序数组构建成最大堆。
  for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
    // 从最后一个非叶子节点开始
    downAdjust(arr, i, arr.length);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    // 下沉调整最大堆
    downAdjust(arr, 0, i);
  }
}
// let arr = [4, 4, 6, 5, 3, 2, 8, 1];
let arr = [-2, 3, -5];
// let arr = [5, 2, 3, 1];
heapSort(arr);
console.log(arr);
