/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s == null || !s.length) {
    return 0;
  }
  s = s.trim();
  let arrS = s.split(" ");
  if (arrS && arrS.length && arrS[arrS.length - 1]) {
    return arrS[arrS.length - 1].length;
  }
  return 0;
};
// let s = "Hello World";
// let s = " ";
let s = "a ";
console.log(lengthOfLastWord(s));
