/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  //将下一个节点值赋给当前节点
  node.val = node.next.val;
  //再将当前节点指向 下下一个节点
  node.next = node.next.next;
};
