/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let list = [];
  if (!matrix || !matrix.length || !matrix[0].length) {
    return list;
  }
  // 行数
  let m = matrix.length;
  // 列数
  let n = matrix[0].length;
  // 层数， 取决于行列的较小值
  let size = (Math.min(m, n) + 1) / 2;
  for (let i = 0; i < size; i++) {}
  // TODO
};
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));
