/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let result = [0, 1];
  if (n < 2) {
    return result[n];
  }
  let one = 1;
  let two = 0;
  let fibN = 0;
  for (let i = 2; i <= n; i++) {
    fibN = one + two;
    two = one;
    one = fibN;
  }
  return fibN;
};

var fib = function (n) {
  let n1 = 0,
    n2 = 1,
    sum;
  for (let i = 0; i < n; i++) {
    // https://blog.csdn.net/zhanshen112/article/details/84871155
    // 这篇文章介绍了为什么对这个数取余的原因
    sum = (n1 + n2) % 1000000007;
    n1 = n2;
    n2 = sum;
  }
  return n1;
};
let n = 2;
// let n = 5;
// let n = 45;

console.log(fib(n));
