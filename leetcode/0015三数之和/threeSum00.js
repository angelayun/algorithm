/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }
  nums.sort();
  console.log(nums);
  let temp = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let res = obj[0 - (nums[i] + nums[j])];
      if (res != null && res != nums[i] && res != nums[j]) {
        let arr = [nums[i], nums[j], obj[0 - (nums[i] + nums[j])]].sort();
        let key = arr.join("-");
        if (!temp[key]) {
          result.push([nums[i], nums[j], obj[0 - (nums[i] + nums[j])]]);
          temp[key] = true;
        }
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
let result = threeSum(nums);
console.log(result);
