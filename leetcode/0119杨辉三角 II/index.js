/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 动态规划的方式实现
var getRow = function (rowIndex) {
  // 第rowIndex行的数组长度为rowIndex+1
  const res = new Array(rowIndex + 1);
  // 每一行的第一项都确定是1
  res[0] = 1;
  // 从第二行开始遍历
  for (let i = 1; i <= rowIndex; i++) {
    // 第i行的首尾项确定是1
    res[0] = res[i] = 1;
    // 从第i行的倒数第二个开始遍历到第二个
    for (let j = i - 1; j >= 1; j--) {
      // 用上一行的值求出当前res[j]
      res[j] = res[j] + res[j - 1];
    }
  }
  return res;
};
// 另外一种稍微占用空间的方式
let cal = (i, j, memo) => {
  // 每一行的首尾两项都是1
  if (j == 0 || i == j) {
    return 1;
  }
  // 如果memo[i][j]有值，返回它，避免落入重复的递归
  if (memo[i][j] > 0) {
    return memo[i][j];
  }
  // 其他情况，有下面的递归公式
  memo[i][j] = cal(i - 1, j - 1, memo) + cal(i - 1, j, memo);
  return memo[i][j];
};
var getRow = function (rowIndex) {
  // 构建memo二维数组
  const memo = new Array(rowIndex + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(i + 1);
  }
  for (let j = 0; j < rowIndex + 1; j++) {
    // 计算第rowIndex行的每个元素
    memo[rowIndex][j] = cal(rowIndex, j, memo);
  }
  return memo[rowIndex];
};
let rowIndex = 3;
console.log(getRow(rowIndex));
