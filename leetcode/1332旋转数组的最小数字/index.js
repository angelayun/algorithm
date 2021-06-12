/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let middle = left + ~~((right - left) >> 1);
    if (numbers[middle] > numbers[right]) left = middle + 1;
    else if (numbers[middle] < numbers[right]) right = middle;
    else right--;
  }
  return numbers[left];
};
// let numbers = [2, 2, 2, 0, 1];
let numbers = [3, 4, 5, 1, 2];
console.log(minArray(numbers));
