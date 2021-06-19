/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const n = arr.length;
  let max = 0;
  const dfs = (i, countArr) => {
    // 出现个数大于1，有重复元素，剪枝
    if (countArr.some((item) => item > 1)) {
      return;
    }
    // 当前每个数量为0或1，可以直接累加，判断大小
    max = Math.max(
      max,
      countArr.reduce((p, c) => p + c, 0)
    );
    if (i == n) {
      return;
    }
    // 不选当前字符
    dfs(i + 1, countArr);
    // 将当前字符中元素数量加入
    const newArr = [].concat(countArr);
    const str = arr[i];
    for (let j = 0; j < str.length; j++) {
      newArr[str.charCodeAt(j) - 97]++;
    }
    // 选择当前字符
    dfs(i + 1, newArr);
  };
  const countArr = new Array(26).fill(0);
  dfs(0, countArr);
  return max;
};
