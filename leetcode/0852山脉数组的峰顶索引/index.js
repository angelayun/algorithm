/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let low = 0,
    high = arr.length - 1;
  while (low < high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
// let arr = [0, 1, 0];
// let arr = [0, 2, 1, 0];
// let arr = [0, 10, 5, 2];
// let arr = [3, 4, 5, 1];
let arr = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19];
console.log(peakIndexInMountainArray(arr));
