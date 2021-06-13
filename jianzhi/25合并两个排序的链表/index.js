/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let h = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1) {
    head.next = l1;
  }
  if (l2) {
    head.next = l2;
  }
  return h.next;
};
let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(4);

let p4 = new ListNode(1);
let p5 = new ListNode(3);
let p6 = new ListNode(4);
p1.next = p2;
p2.next = p3;

p4.next = p5;
p5.next = p6;
// 1 1 2 3 4 4
console.log(mergeTwoLists(p1, p4));
