/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    // 当前元素出现在它该出现的位置，无需交换
    if (nums[i] == i + 1) {
      i++;
      continue;
    }
    // 当前元素应该出现的位置
    const idealIdx = nums[i] - 1;
    // 当前元素=它理应出现的位置上的现有元素，说明重复了
    if (nums[i] == nums[idealIdx]) {
      i++;
      continue;
    }
    // 不重复，进行交换
    [nums[idealIdx], nums[i]] = [nums[i], nums[idealIdx]];
    // 为什么这里不要i++，因为交换过来的数字本身也需要考察，需要交换到它合适的位置上
    // i++ 了就会跳过它，少考察了它
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // 值与索引 不对应
    if (nums[i] != i + 1) {
      res.push(i + 1);
    }
  }
  return res;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
