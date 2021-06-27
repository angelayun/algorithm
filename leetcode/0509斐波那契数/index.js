/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let s0 = 0,
    s1 = 1,
    i = 1;
  while (i++ < n) s1 = s0 + (s0 = s1);
  return n ? s1 : 0;
};
