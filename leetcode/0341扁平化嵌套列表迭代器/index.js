/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
function dfs(nestedInteger) {
  // 按照js 语法应该是下面这段
  const res = [];
  // 如果是数字
  if (Number.isInteger(nestedInteger)) {
    // 将数字推入res
    res.push(nestedInteger);
  } else {
    // 遍历nestedList，child是当前子元素
    for (let child of nestedInteger) {
      // 递归展平，推入res
      res.push(...dfs(child));
    }
  }
  return res;
  // 但是提交到leetcode上应该是下面这段才不会报错
  const res = [];
  if (nestedInteger.isInteger()) {
    res.push(nestedInteger.getInteger());
  } else {
    for (const child of nestedInteger.getList()) {
      res.push(...dfs(child));
    }
  }
  return res;
}
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  // 存放展平后的数字
  this.nums = [];
  // index是当前Next调用应该返回的第index个数
  this.index = 0;
  // 遍历nestedList
  for (let node of nestedList) {
    // 当前的元素 展平后的数字 推入nums
    this.nums.push(...dfs(node));
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  // 是否还能获取到元素，取决于index是否越了nums的界
  return this.index < this.nums.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  // 更新index
  return this.nums[this.index++];
};
