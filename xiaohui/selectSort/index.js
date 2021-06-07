function selectSort(arr) {
  // 轮数
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // 第0轮的时候  跟后面从第1个元素开始比较
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        // 记录下当前轮最小的元素index
      }
    }
    // 把当前轮最小的元素交换过来
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
// let arr = [3, 4, 2, 1, 5, 6, 7, 8, 30, 50, 1, 33, 24, 5, -4, 7, 0];
let arr = [12, 1, 3, 46, 5, 0, -3, 12, 35, 16];
console.log(selectSort(arr));
