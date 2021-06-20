/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (s == null) {
    return 0;
  }
  let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let val = map.get(s[i]);
    if (val < map.get(s[i + 1])) {
      ans -= val;
    } else {
      ans += val;
    }
  }
  return ans;
};
let s = "MCMXCIV";
console.log(romanToInt(s));
