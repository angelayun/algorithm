/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < column - 1; j++) {
      if (matrix[i][j] != matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
};

/* let matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
]; */
let matrix = [
  [1, 2],
  [2, 2],
];
console.log(isToeplitzMatrix(matrix));
