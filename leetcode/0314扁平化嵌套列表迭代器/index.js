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
  if (Number.isInteger(nestedInteger)) {
    res.push(nestedInteger);
  } else {
    for (let child of nestedInteger) {
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
  this.nums = [];
  this.index = 0;
  for (let node of nestedList) {
    this.nums.push(...dfs(node));
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.index < this.nums.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.nums[this.index++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

//  let vals=
