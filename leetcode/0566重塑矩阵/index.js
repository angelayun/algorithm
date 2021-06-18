/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (r * c != m * n) {
    return mat;
  }
  const res = new Array(r);
  for (let i = 0; i < r; i++) {
    res[i] = new Array(c);
  }
  let newR = 0;
  let newC = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[newR][newC] = mat[i][j];
      newC++;
      if (newC == c) {
        newR++;
        newC = 0;
      }
    }
  }
  return res;
};
/* let nums = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4; */
let nums = [
  [1, 2],
  [3, 4],
];
(r = 2), (c = 4);
console.log(matrixReshape(nums, r, c));
