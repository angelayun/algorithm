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

function quickSort(arr, startIndex, endIndex) {
  let stack = [];
  // 用一个集合栈来代替递归的函数栈
  let map = new Map();
  // 整个数组的起止下标，以哈希的形式入栈
  map.set("startIndex", startIndex);
  map.set("endIndex", endIndex);
  stack.push(map);
  // 循环结束条件，栈为空
  while (stack.length) {
    // 栈顶元素出栈，得到起止下标
    let params = stack.pop();
    let curStart = params.get("startIndex"),
      curEnd = params.get("endIndex");
    // 得到基准元素位置
    let pivotIndex = partition(arr, curStart, curEnd);
    // 根据基准元素分成两部分, 把每一部分的起止下标入栈
    if (curStart < pivotIndex - 1) {
      let map = new Map();
      map.set("startIndex", curStart);
      map.set("endIndex", pivotIndex - 1);
      stack.push(map);
    }
    if (pivotIndex + 1 < curEnd) {
      let map = new Map();
      map.set("startIndex", pivotIndex + 1);
      map.set("endIndex", curEnd);
      stack.push(map);
    }
  }
}
let arr = [4, 4, 6, 5, 3, 2, 8, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
