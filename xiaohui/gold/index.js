/**
 * 获得金矿的最优收益
 * @param {*} works  工人数量
 * @param {*} n 可选金矿数量
 * @param {*} persons 金矿开采所需工人数量
 * @param {*} golds 金矿储量
 */
function getBestGoldMining(works, n, persons, golds) {
  if (works == 0 || n == 0) {
    return 0;
  }
  // 所剩下工人不够挖当前金矿
  if (works < persons[n - 1]) {
    return getBestGoldMining(works, n - 1, persons, golds);
  }
  // 哪个价值更高取哪个
  return Math.max(
    // 当前这个金矿不开采，剩余的人力去开采其它的金矿
    getBestGoldMining(works, n - 1, persons, golds),
    // 当前金矿开采
    getBestGoldMining(works - persons[n - 1], n - 1, persons, golds) +
      golds[n - 1]
  );
}
/**
 * 获得金矿的最优收益
 * @param {*} works  工人数量
 * @param {*} n 可选金矿数量
 * @param {*} persons 金矿开采所需工人数量
 * @param {*} golds 金矿储量
 */
function getBestGoldMining(works, n, persons, golds) {
  let resultTable = new Array(golds.length + 1);
  for (let i = 0; i < resultTable.length; i++) {
    resultTable[i] = new Array(works + 1).fill(0);
  }
  for (let i = 1; i <= golds.length; i++) {
    for (let j = 1; j <= works; j++) {
      if (j < persons[i - 1]) {
        resultTable[i][j] = resultTable[i - 1][j];
      } else {
        resultTable[i][j] = Math.max(
          resultTable[i - 1][j],
          resultTable[i - 1][j - persons[i - 1]] + golds[i - 1]
        );
      }
    }
  }
  console.log(resultTable);
  return resultTable[golds.length][works];
}
/**
 * 获得金矿的最优收益
 * @param {*} works  工人数量
 * @param {*} n 可选金矿数量
 * @param {*} persons 金矿开采所需工人数量
 * @param {*} golds 金矿储量
 */
function getBestGoldMining(works, n, persons, golds) {
  let resultTable = new Array(works + 1).fill(0);

  for (let i = 1; i <= golds.length; i++) {
    for (let j = works; j >= 1; j--) {
      if (j >= persons[i - 1]) {
        resultTable[j] = Math.max(
          resultTable[j],
          resultTable[j - persons[i - 1]] + golds[i - 1]
        );
      }
    }
  }
  console.log(resultTable);
  return resultTable[works];
}
// 工人数量
let works = 10;
// 挖第一个金矿需要5个人，第二个需要5个人，第三个需要3个人...
let persons = [5, 5, 3, 4, 3];
// 第一个金矿含量为400kg  第二个金矿含量为500kg...
let golds = [400, 500, 200, 300, 350];
let result = getBestGoldMining(works, golds.length, persons, golds);
console.log(result);
