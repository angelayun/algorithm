/**
 * @param {number[]} nums
 * @return {number}
 */
/* let realTotal = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); */
var missingNumber = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.ceil(left + ((right - left) >> 1));
    // let middle = Math.ceil((left + right) / 2);
    // console.log(middle);
    if (nums[middle] == middle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 9];
// let nums = [0, 1, 3];
// let nums = [1, 2];
let nums = [0, 1, 3, 4, 5, 6, 7, 8, 9];
console.log(missingNumber(nums));
