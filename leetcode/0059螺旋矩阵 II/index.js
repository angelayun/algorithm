/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }
  let num = 1;
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  while (num <= n * n) {
    // 上边  从左到右
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;
    // 右边 从上到下
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;
    // 下边 从右到左
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;
    // 左边  从下到上
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }
  return matrix;
};
let n = 3;
console.log(generateMatrix(n));
