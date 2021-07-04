/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  // 下面是我写的版本
  /* let s0 = 0,
    s1 = 1,
    s2 = 1;
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  let i = 2;
  while (i++ < n) {
    s3 = s0 + s1 + s2;
    s0 = s1;
    s1 = s2;
    s2 = s3;
  }
  return s3; */
  let dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};
let n = 4;
// let n = 25;

console.log(tribonacci(n));
