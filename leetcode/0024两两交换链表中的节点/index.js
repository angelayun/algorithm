/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  //用stack保存每次迭代的两个节点
  let stack = [];
  let p = new ListNode(-1);
  let cur = head;
  // head指向新的p节点，函数结束时返回head.next即可
  head = p;
  while (cur != null && cur.next != null) {
    stack.push(cur);
    stack.push(cur.next);
    cur = cur.next.next;
    p.next = stack.pop();
    p = p.next;
    p.next = stack.pop();
    p = p.next;
  }
  p.next = cur != null ? cur : null;
  return head.next;
};
