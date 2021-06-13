/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    // 边界情况: 0、1的平方根分别是0、1
    return x;
  }
  // 左右指针指向左右边界
  let left = 1;
  let right = x >> 1;
  while (left + 1 < right) {
    // 退出循环时，它们相邻
    let mid = left + ((right - left) >> 1);
    if (mid == x / mid) {
      // 如果 mid 的平方正好等于 x，则返回 mid
      return mid;
    } else if (mid < x / mid) {
      // 如果 mid 的平方小于 x，说明平方根落在 mid 和 right 之间，让 left=mid
      left = mid;
    } else {
      // 如果 mid 的平方大于 x，说明平方根落在 left 和 mid 之间，让 right=mid
      right = mid;
    }
  }
  return right > x / right ? left : right;
};
// let x = 4;
let x = 8;
console.log(mySqrt(x));
