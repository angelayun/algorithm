/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  if (s == null || !s.length) {
    return "";
  }
  s = s.split("");
  // 空格的长度
  let numberOfBlank = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] == " ") {
      ++numberOfBlank;
    }
    ++i;
  }
  let newLength = s.length - 1 + numberOfBlank * 2;
  let indexOfOrigin = s.length - 1;
  let indexOfNew = newLength;
  while (indexOfOrigin >= 0 && indexOfNew > indexOfOrigin) {
    if (s[indexOfOrigin] == " ") {
      s[indexOfNew--] = "0";
      s[indexOfNew--] = "2";
      s[indexOfNew--] = "%";
    } else {
      s[indexOfNew--] = s[indexOfOrigin];
    }
    indexOfOrigin--;
  }
  return s.join("");
};
let s = "We are happy.";
// let s = "";
console.log(replaceSpace(s));
