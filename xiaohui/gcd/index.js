function gcd(a, b) {
  let big = a > b ? a : b;
  let small = a < b ? a : b;
  if (big % small == 0) {
    return small;
  }
  // 使用暴力枚举的方法，从较小整数的一半开始，试图找到一个合适的整数i
  for (let i = small / 2; i > 1; i--) {
    if (small % i == 0 && big % i == 0) {
      return i;
    }
  }
  return 1;
}
function gcd(a, b) {
  let big = a > b ? a : b;
  let small = a < b ? a : b;
  if (big % small == 0) {
    return small;
  }
  // 辗转相除法
  return gcd(big % small, small);
}
function gcd(a, b) {
  if (a == b) {
    return a;
  }
  let big = a > b ? a : b;
  let small = a < b ? a : b;
  // 更相减损术
  return gcd(big - small, small);
}
// 两者结合法
function gcd(a, b) {
  if (a == b) {
    return a;
  }
  // 当a和b均为偶数时，
  if ((a & 1) == 0 && (b & 1) == 0) {
    return gcd(a >> 1, b >> 1) << 1;
  } else if ((a & 1) == 0 && (b & 1) != 0) {
    // a为偶数 b为奇数
    return gcd(a >> 1, b);
  } else if ((a & 1) != 0 && (b & 1) == 0) {
    // a为奇数  b为偶数
    return gcd(a, b >> 1);
  } else {
    // 都是奇数情况  用更相减损术运算一次
    let big = a > b ? a : b;
    let small = a < b ? a : b;
    return gcd(big - small, small);
    // a-b必然为偶数  然后又可以继续进行移位运算了
  }
}
console.log(gcd(25, 5));
console.log(gcd(100, 80));
console.log(gcd(27, 14));
