/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (const char of s) {
    if (char != "]") {
      // ] 前的字符都入栈
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = "";
    while (cur != "[") {
      // cur字符加在左边
      str = cur + str;
      // 这里循环结束的时候cu已经是[
      cur = stack.pop();
    }
    // 此时cur为 [，接下来要遇到数字
    let num = "";
    // 把[前面的数字给弹出来
    cur = stack.pop();
    // 如果是数字的话   因为可能不止一位数字
    while (!isNaN(cur)) {
      // 数字字符依旧加在左边
      num = cur + num;
      // 因为这里多弹出了一个， 所以while后的下一步需要再把它放进来
      cur = stack.pop();
    }
    // 注意点，这里可能cur是undefined
    stack.push(cur);
    stack.push(str.repeat(num));
  }
  // 奇妙的是上面undefined不需要判断 取决于join会把undefined过滤掉
  return stack.join("");
};
let s = "3[a2[c]]";
// let s = "2[abc]3[cd]ef";
// let s = "abc3[cd]xyz";
// let s = "3[a]2[bc]";
console.log(decodeString(s));
