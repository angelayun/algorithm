/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  if (tokens == null || !tokens.length) {
    return tokens;
  }
  // 遍历 tokens 数组
  for (const a of tokens) {
    // 如果不是数字的话
    if (isNaN(Number(a))) {
      // 遇到运算符时，从栈中取出两个数字，即最近遇到的两个，进行运算
      // 先出来的元素是n2
      let n2 = stack.pop();
      let n1 = stack.pop();
      switch (a) {
        // 算出的新数入栈。
        case "+":
          stack.push(Number(n1) + Number(n2));
          break;
        case "-":
          stack.push(n1 - n2);
          break;
        case "*":
          stack.push(n1 * n2);
          break;
        case "/":
          stack.push((n1 / n2) | 0);
          break;
      }
    } else {
      // 等待被运算的数字进栈暂存，保留记忆
      stack.push(a);
    }
  }
  // 遍历结束时，栈中剩下一个最后算出的数，返回它即可。
  return stack[0];
};
// let tokens = ["2", "1", "+", "3", "*"];
tokens = ["4", "13", "5", "/", "+"];
console.log(evalRPN(tokens));
