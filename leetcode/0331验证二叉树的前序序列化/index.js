/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const symbol = "#";
  if (preorder == symbol) {
    return true;
  }
  // 初始 入度出度
  let indegree = 0,
    outdegree = 0;
  // 转成数组
  const nodes = preorder.split(",");
  for (let i = 0; i < nodes.length; i++) {
    // 根节点
    if (i == 0) {
      if (nodes[i] == symbol) {
        // #,#,1 这样的 是非法的
        return false;
      }
      // 根节点  出度+2
      outdegree += 2;
      continue;
    }
    if (nodes[i] == symbol) {
      // null 节点  入度+1
      indegree += 1;
    } else {
      // 非空节点
      indegree += 1;
      outdegree += 2;
    }
    // 一直保持indegree<outdegree，直到最后才indegree==outdegree，做不到就false
    if (i != nodes.length - 1 && indegree >= outdegree) {
      return false;
    }
  }
  // 最后肯定入度==出度
  return indegree == outdegree;
};
let preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#";
console.log(isValidSerialization(preorder));
