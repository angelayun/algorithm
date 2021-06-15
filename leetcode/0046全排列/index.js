/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const used = {};
  let dfs = (path) => {
    if (path.length == nums.length) {
      return res.push(path.slice());
    }
    for (const num of nums) {
      // 使用过的，跳过
      if (used[num]) continue;
      // 选择当前的数，加入path
      path.push(num);
      // 记录一下 使用了
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  };
  dfs([]); // 递归的入口，空path传进去
  return res;
};
let nums = [1, 2, 3];
console.log(permute(nums));
