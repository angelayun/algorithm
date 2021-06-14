/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (map[stack[stack.length - 1]] == element) {
      stack.pop();
    } else {
      stack.push(element);
    }
  }
  return !stack.length;
};
// 看到另外一种解 法  代码虽然没有上面简洁  但是很容易理解
const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c == "{" || c == "[" || c == "(") {
      // 是左括号，入栈
      stack.push(c);
    } else {
      // 是右括号
      if (stack.length == 0) {
        // 此时栈空，无法匹配
        return false;
      }
      const top = stack[stack.length - 1]; // 获取栈顶
      if (
        (top == "(" && c == ")") ||
        (top == "[" && c == "]") ||
        (top == "{" && c == "}")
      ) {
        stack.pop(); // 如果栈顶是对应的左括号，被匹配，出栈
      } else {
        // 不是对应的左括号，无法匹配
        return false;
      }
    }
  }
  return stack.length == 0; // 栈空，则所有左括号找到匹配；栈中还剩有左括号，则没被匹配
};
// let s = "()";
// let s = "()[]{}";
// let s = "(]";
let s = "{[]}";
console.log(isValid(s));
