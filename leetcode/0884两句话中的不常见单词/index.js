/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let ans = [];
  if (s1 == null || !s1.length || s2 == null || !s2.length) {
    return ans;
  }
  let map = new Map();
  let split1 = s1.split(" ");
  let split2 = s2.split(" ");
  for (let a of split1) {
    map.set(a, (map.get(a) || 0) + 1);
  }
  for (let a of split2) {
    map.set(a, (map.get(a) || 0) + 1);
  }
  for (let a of map) {
    if (map.get(a[0]) == 1) {
      ans.push(a[0]);
    }
  }
  return ans;
};
/* let A = "this apple is sweet",
  B = "this apple is sour"; */
let A = "apple apple",
  B = "banana";
console.log(uncommonFromSentences(A, B));
