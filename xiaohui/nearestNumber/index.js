function findTransferPoint(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      return i;
    }
  }
  return 0;
}
function exchangeHead(arr, index) {
  // TODO
  let head = arr[index - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (head < arr[i]) {
      arr[index - 1] = arr[i];
      arr[i] = head;
      break;
    }
  }
  return arr;
}
function reverse(arr, index) {
  for (let i = index, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function findNearestNumber(arr) {
  //1.从后向前查看逆序区域，找到逆序区域的前一位，也就是数字置换的边界
  let index = findTransferPoint(arr);
  // 逆序排列的情况下最大，顺序排列的情况下最小
  //如果数字置换边界是0，说明整个数组已经逆序，无法得到更大的相同数字组成的整数，返回null
  if (index == 0) {
    return null;
  }
  //2.把逆序区域的前一位和逆序区域中刚刚大于它的数字交换位置
  let copyArr = arr.concat();
  exchangeHead(copyArr, index);
  //3.把原来的逆序区域转为顺序
  reverse(copyArr, index);
  return copyArr;
}
let arr = [1, 2, 3, 5, 6, 4, 8];
for (let i = 0; i < 10; i++) {
  arr = findNearestNumber(arr);
  console.log(arr);
}
