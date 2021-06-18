/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    // 交集区间的左端，取它们的较大者
    const start = Math.max(firstList[i][0], secondList[j][0]);
    // 交集区间的右端，取它们的较小者
    const end = Math.min(firstList[i][1], secondList[j][1]);
    if (start <= end) {
      // 形成了交集区间
      res.push([start, end]);
    }
    // 谁小谁就进一步
    // 谁先结束，谁的指针就步进，考察下一个子区间
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};
let firstList = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ],
  secondList = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ];
console.log(intervalIntersection(firstList, secondList));
