/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  for (let i = 0; i < k; i++) {
    let hasCut = false;
    //从左向右遍历，找到比自己右侧数字大的数字并删除
    for (let j = 0; j < num.length - 1; j++) {
      if (num[j] > num[j + 1]) {
        num = num.substring(0, j) + num.substring(j + 1, num.length);
        hasCut = true;
        break;
      }
    }
    //如果没有找到要删除的数字，则删除最后一个数字
    if (!hasCut) {
      num = num.substring(0, num.length - 1);
    }
  }
  //清除整数左侧的数字0
  let start = 0;
  for (let j = 0; j < num.length - 1; j++) {
    if (num[j] != 0) {
      break;
    }
    start++;
  }
  num = num.substring(start, num.length);
  //如果整数的所有数字都被删除了，直接返回0
  if (num.length == 0) {
    return "0";
  }
  return num;
};
let num = "1432219",
  k = 3;
console.log(removeKdigits(num, k));
