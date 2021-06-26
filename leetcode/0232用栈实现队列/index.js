/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  // 当作输入栈，用于压入 push 传入的数据
  this.inStack = [];
  // 输出栈，用于 pop 和 peek 操作。
  this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

MyQueue.prototype.in2out = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
};
/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 每次 pop 或 peek 时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，
  // 这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。
  if (!this.outStack.length) {
    this.in2out();
  }
  return this.outStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
    this.in2out();
  }
  return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.outStack.length === 0 && this.inStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
