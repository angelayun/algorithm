function findLostNum(arr) {
  //用于存储两个出现奇数次的整数
  let result = new Array(2).fill(0);
  //第一次整体异或
  let xorResult = 0;
  for (let a of arr) {
    xorResult ^= a;
  }
  //如果异或结果为0，说明输入数组不符合题目
  if (xorResult == 0) {
    return null;
  }
  //确定两个整数的不同位，以此来做分组
  let separator = 1;
  while ((xorResult & separator) == 0) {
    separator = separator << 1;
  }
  //第二次分组异或
  for (let a of arr) {
    if ((a & separator) == 0) {
      result[0] ^= a;
    } else {
      result[1] ^= a;
    }
  }
  return result;
}
let nums = [4, 1, 2, 2, 5, 1, 4, 3];
console.log(findLostNum(nums));
