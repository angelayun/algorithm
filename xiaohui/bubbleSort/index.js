// 第一版本
function sort(array) {
  // 第一层控制轮数   如果是8个元素进行排序的话，那只要比较7轮就ok了
  for (let i = 0; i < array.length - 1; i++) {
    // 有序标识，每一轮的初始值都是true
    let isSorted = true;
    for (let j = 0; j < array.length - i - 1; j++) {
      // 每一个都与它后面相邻的元素比较
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // 有元素交换，所以不是有效的  标记变为false
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
  }
  return array;
}
// 第二版本  优化后面不需要的排序
function sort(array) {
  //记录最后一次交换的位置
  let lastExchangeIndex = 0;
  //无序数列的边界，每次比较只需要比到这里为止
  let sortBorder = array.length - 1;
  // 第一层控制轮数
  for (let i = 0; i < array.length - 1; i++) {
    // 有序标识，每一轮的初始值都是true
    let isSorted = true;
    for (let j = 0; j < sortBorder; j++) {
      // 每一个都写它后面相邻的元素比较
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // 有元素交换，所以不是有效的  标记变为false
        isSorted = false;
        //把无序数列的边界更新为最后一次交换元素的位置
        lastExchangeIndex = j;
      }
    }
    if (isSorted) {
      break;
    }
    sortBorder = lastExchangeIndex;
  }
  return array;
}
// 第三版本  鸡尾排序
function sort(array) {
  // 第一层控制轮数
  for (let i = 0; i < array.length / 2; i++) {
    // 有序标识，每一轮的初始值都是true
    let isSorted = true;
    //奇数轮，从左向右比较和交换
    for (let j = i; j < array.length - i - 1; j++) {
      // 每一个都与它后面相邻的元素比较
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // 有元素交换，所以不是有效的  标记变为false
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
    //偶数轮之前，重新标记为true
    isSorted = true;
    //偶数轮，从右向左比较和交换
    for (let j = array.length - i - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        //有元素交换，所以不是有序，标记变为false
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
  }
  return array;
}
var array = [5, 8, 6, 3, 9, 2, 1, 7];
sort(array);
console.log(array);
var array1 = [3, 4, 2, 1, 5, 6, 7, 8];
sort(array1);
console.log(array1);
