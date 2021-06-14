/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const helper = (start, end) => {
    if (end - start + 1 < k) {
      // 区间的长度小于k，不存在满足条件的T串
      return 0;
    }
    // 统计当前区间的字符的出现次数
    const freq = {};
    for (let i = start; i <= end; i++) {
      if (freq[s[i]] == null) {
        freq[s[i]] = 1;
      } else {
        freq[s[i]]++;
      }
    }
    // 在区间长度>=k的前提下，如果start位置上的字符出现的次数小于k
    while (end - start + 1 >= k && freq[s[start] < k]) {
      // 则T子串肯定不包含这个start字符，start指针右移
      start++;
    }
    // 在区间长度>=k的前提下，如果end位置上的字符出现的次数小于k
    while (end - start + 1 >= k && freq[s[end]] < k) {
      // 则T子串肯定不包含这个end字符，end指针左移
      end--;
    }
    if (end - start + 1 < k) {
      // 如果区间长度因此而 < k，直接返回0
      return 0;
    }
    for (let i = start; i <= end; i++) {
      if (freq[s[i]] < k) {
        // 如果在区间内的出现次数 < k，递归考察两侧的区间
        return Math.max(helper(start, i - 1), helper(i + 1, end));
      }
    }
    // 当前区间的字符出现次数都 >= k，当前区间满足要求，返回该长度
    return end - start + 1;
  };
  // 整个s串的最长的T长度
  return helper(0, s.length - 1);
};
// let s = "aaabb",
//   k = 3;
let s = "ababbc",
  k = 2;
console.log(longestSubstring(s, k));
