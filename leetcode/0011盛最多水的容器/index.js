/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height == null) {
    return 0;
  }
  let i = 0,
    j = height.length - 1;
  let result = 0;
  while (i < j) {
    let temp = Math.min(height[i], height[j]);
    result = Math.max(result, temp * (j - i));
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return result;
};
let height = [4, 3, 2, 1, 4];
console.log(maxArea(height));
