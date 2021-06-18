/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 栈。解析过的数字入栈
  const nums = [];
  // 当前遇到的数字
  let cur = 0;
  // 上一个遇到的运算符
  let prevOp = "+";
  // 追加一个运算符，不然会少做最后一次运算
  s = s + "+";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      // 如果是数字
      cur = cur * 10 + s[i].charCodeAt(0) - "0".charCodeAt(0);
    } else if (s[i] == " ") {
      // 如果遇到空格，跳过
      continue;
    } else {
      // 如果遇到加减乘除
      switch (true) {
        case prevOp == "+":
          nums.push(cur);
          break;
        case prevOp == "-":
          nums.push(-1 * cur);
          break;
        case prevOp == "*":
          nums[nums.length - 1] *= cur;
          break;
        case prevOp == "/":
          // | 是向下取整
          nums[nums.length - 1] = (nums[nums.length - 1] / cur) | 0;
          break;
      }
      prevOp = s[i];
      cur = 0;
    }
  }
  let sum = 0;
  nums.forEach((v) => {
    sum += v;
  });
  return sum;
};
// let s = "3+2*2";
let s = " 3/2 ";
console.log(calculate(s));
