/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const counts = new Array(26).fill(0); // 长度为26的数组，存放字符的出现次数

  for (const c of s) {
    // 遍历s的每个字符，统计出现次数
    counts[c.charCodeAt(0) - 97]++; // 97是 a 的Unicode值
  }
  for (let i = 0; i < s.length; i++) {
    // 再次遍历s
    if (counts[s[i].charCodeAt(0) - 97] == 1) {
      // 找出第一个频次为1的字符的索引
      return i;
    }
  }
  return -1; // 没有只出现1次的字符，返回-1
};
// let s = "loveleetcode";
let s = "leetcode";
console.log(firstUniqChar(s));
