/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let find = false;
  if (matrix == null || target == null) {
    return find;
  }
  let rows = matrix.length;
  let columns = 0;
  if (rows > 0 && matrix[0] != null && matrix[0].length) {
    columns = matrix[0].length;
  }
  if (rows > 0 && columns > 0) {
    let row = 0;
    let column = columns - 1;
    while (row < rows && columns >= 0) {
      if (matrix[row][column] == target) {
        return true;
      } else if (matrix[row][column] > target) {
        column--;
      } else {
        row++;
      }
    }
  }
  return find;
};

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.log(findNumberIn2DArray(matrix, 5));
console.log(findNumberIn2DArray(matrix, 20));
