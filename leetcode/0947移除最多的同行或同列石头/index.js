/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let n = stones.length,
    u = new UnionFind(n),
    i = -1;
  while (++i < n) u.union(stones[i][0], ~stones[i][1]);
  return n - u.n;
};
class UnionFind {
  constructor(n) {
    this.n = 0; // 声明初始数量为 0
    this.parents = new Map();
  }
  union(x, y) {
    const rootX = this.find(x),
      rootY = this.find(y);
    if (rootX !== rootY) {
      if (x !== rootX) this.n--; // 有主人不是自己，主人数 -1
      if (!this.parents.has(rootY)) {
        // 没遇到过的新主人
        this.parents.set(rootY, rootY); // 标记遇到过了
        this.n++; // 主人数 +1
      }
      this.parents.set(rootX, rootY);
    }
  }
  find(x) {
    while (this.parents.has(x) && x !== this.parents.get(x))
      x = this.parents.get(x);
    return x;
  }
}
let stones = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
console.log(removeStones(stones));
