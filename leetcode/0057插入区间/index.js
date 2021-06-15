/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = [];
  let i = 0;
  const len = intervals.length;

  // 判断左边不重叠的区间
  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    // 当前遍历是有重叠的区间
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给合并区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给合并区间的右端
    i++;
  }
  res.push(newInterval); // 循环结束后，为合并后的区间，推入res

  while (i < len) {
    // 在右边，没重叠的区间
    res.push(intervals[i]);
    i++;
  }

  return res;
};
/* let intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5]; */

let intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];

/* let intervals = [],
  newInterval = [5, 7]; */

/* let intervals = [[1, 5]],
  newInterval = [2, 3]; */

/* let intervals = [[1, 5]],
  newInterval = [2, 7]; */

console.log(insert(intervals, newInterval));
