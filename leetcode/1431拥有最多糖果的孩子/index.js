/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    // 再循环一遍数组
    candies[i] = candies[i] + extraCandies >= max;
  }
  return candies;
};
let candies = [2, 3, 5, 1, 3],
  extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
