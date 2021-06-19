/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals == null || !intervals.length) {
    return intervals;
  }
  //先按区间的一个元素排序一遍
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    //[x1,x2]和[y1,y2]比较，如果x2<y1说明这两个区间不相交
    if (result[result.length - 1][1] < intervals[i][0]) {
      result.push(intervals[i]);
    } else {
      //否则，将这两个区间合并为 [x1,max(x2,y2)]
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        intervals[i][1]
      );
    }
  }
  return result;
};
let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
