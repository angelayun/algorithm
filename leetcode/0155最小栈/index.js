/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data_stack = [];
  this.min_stack = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.data_stack.push(val);
  // 相当于每push一次值，min_stack都保存了这次值对应的min值
  this.min_stack.push(Math.min(val, this.min_stack[this.min_stack.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data_stack.pop();
  this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data_stack[this.data_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
debugger;
minStack.getMin(); // 返回 -3.
minStack.pop();
minStack.top(); // 返回 0.
minStack.getMin(); // 返回 -2.
