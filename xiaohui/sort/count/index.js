/* // 基础版 计数排序
function countSort(arr) {
  //1.得到数列的最大值
  let max = Math.max(...arr);
  //2.根据数组最大值确定统计数组的长度
  let countArr = new Array(max + 1).fill(0);
  //3.遍历数列，填充统计数组
  for (let a of arr) {
    countArr[a]++;
  }
  //4.遍历统计数组，输出结果
  let index = 0;
  let sortArr = new Array(arr.length).fill(0);
  for (let i = 0; i < countArr.length; i++) {
    for (let j = 0; j < countArr[i]; j++) {
      sortArr[index++] = i;
    }
  }
  return sortArr;
} */
// 计数排序   改进版本
function countSort(arr) {
  //1.得到数列的最大值和最小值，并算出差值d
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let d = max - min;
  //2.创建统计数组并统计对应元素个数
  let countArr = new Array(d + 1).fill(0);
  for (let a of arr) {
    countArr[a - min]++;
  }
  //3.统计数组做变形，后面的元素等于前面的元素之和
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1];
  }
  //4.倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
  let sortArr = new Array(arr.length).fill(0);
  for (let i = arr.length - 1; i >= 0; i--) {
    // 里面的-1 是因为sortArr是从0开始下标  所以要减1
    sortArr[countArr[arr[i] - min] - 1] = arr[i];
    countArr[arr[i] - min]--;
  }
  return sortArr;
}
// let arr = [4, 4, 6, 5, 3, 2, 8, 1, 7, 5, 6, 0, 10];
let arr = [95, 94, 91, 98, 99, 90, 99, 93, 91, 92];
console.log(countSort(arr));
