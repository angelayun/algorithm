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
var middleNode = function (head) {
  if (head == null && head.next == null) {
    return head;
  }
  let low = head,
    fast = head.next;
  while (fast && fast.next) {
    // 慢指针每次走一步，快指针每次走两步
    low = low.next;
    fast = fast.next.next;
  }
  //根据快指针是否为空判断边界条件
  return fast ? low.next : low;
};
