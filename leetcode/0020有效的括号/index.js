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
// let s = "()";
// let s = "()[]{}";
// let s = "(]";
let s = "{[]}";
console.log(isValid(s));
