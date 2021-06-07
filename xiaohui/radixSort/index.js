const ASCII_RANGE = 128;
function radixSort(arr, maxLength) {
  //排序结果数组，用于存储每一次按位排序的临时结果
  let sortArr = [];
  //从个位开始比较，一直比较到最高位
  for (let k = maxLength - 1; k >= 0; k--) {
    //1.创建辅助排序的统计数组，并把待排序的字符对号入座，
    //这里为了代码简洁，直接使用ascii码范围作为数组长度
    let countArr = [];
    for (let i = 0; i < arr.length; i++) {
      let index = getCharIndex(arr[i], k);
      countArr[index] = (countArr[index] || 0) + 1;
    }
    //2.统计数组做变形，后面的元素等于前面的元素之和
    for (let j = 1; j < countArr.length; j++) {
      countArr[j] = (countArr[j] || 0) + (countArr[j - 1] || 0);
    }
    //3.倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
    for (let i = arr.length - 1; i >= 0; i--) {
      let index = getCharIndex(arr[i], k);
      let sortIndex = countArr[index] - 1;
      sortArr[sortIndex] = arr[i];
      countArr[index]--;
    }
    //下一轮排序需要以上一轮的排序结果为基础，因此把结果复制给array
    for (let j = 0; j < sortArr.length; j++) {
      arr[j] = sortArr[j];
    }
  }
  return arr;
}
//获取字符串第k位字符所对应的ascii码序号
function getCharIndex(str, k) {
  //如果字符串长度小于k，直接返回0，相当于给不存在的位置补0
  if (str.length < k + 1) {
    return 0;
  }
  return str.charCodeAt(k);
}

let arr = ["qd", "ada", "qwe", "hhh", "adb", "a", "cws", "abc", "ope"];
// let arr = [12, 1, 3, 46, 5, 0, -3, 12, 35, 16];
let other = radixSort(arr, 3);
console.log(other);
