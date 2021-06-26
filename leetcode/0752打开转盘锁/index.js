/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  // 旋转次数
  let step = 0;
  const deadSet = new Set();
  const visitedSet = new Set();
  // 记录所有“死亡点”
  for (const dead of deadends) {
    deadSet.add(dead);
  }
  // 队列q
  const q = ["0000"];
  while (q.length) {
    // 循环直至队列为空
    const size = q.length;
    //  获取BFS当前level的节点个数
    for (let i = 0; i < size; i++) {
      // 遍历当前层的节点
      const node = q.shift();
      if (node == target) {
        // 如果出列的节点正好是目标节点
        return step;
      }
      if (visitedSet.has(node)) {
        // 之前访问过该节点，跳过
        continue;
      }
      if (deadSet.has(node)) {
        // 遇到“死亡点”，跳过
        continue;
      }
      visitedSet.add(node);
      // 通过遍历当前字符串，找出它的所有子节点，安排入列
      for (let j = 0; i < node.length; j++) {
        //  获取当前的数字num
        const num = node[j] - "0";
        // 往上拧所得的新数，比如1变成2
        const up = (num + 1) % 10;
        // 往下拧所得的新数，比如7变成6
        const down = (num + 9) % 10;
        // 拼成新字符串，入列
        q.push(node.substring(0, j) + up + node.substring(j + 1));
        q.push(node.substring(0, j) + down + node.substring(j + 1));
      }
    }
    step++;
  }
  return -1;
};
