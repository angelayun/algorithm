/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) {
    return null;
  }
  if (val == null) {
    return head;
  }
  let pPre = head;
  let pFast = pPre;
  if (pPre.val == val) {
    return pPre.next;
  }
  if (pFast.next) {
    pFast = pFast.next;
    while (pFast) {
      if (pFast.val == val) {
        pPre.next = pFast.next;
        break;
      }
      pFast = pFast.next;
      pPre = pPre.next;
    }
  }
  return head;
};
let p1 = new ListNode(4);
let p2 = new ListNode(5);
let p3 = new ListNode(1);
let p4 = new ListNode(9);
p1.next = p2;
p2.next = p3;
p3.next = p4;
console.log(deleteNode(p1, 5));
// console.log(deleteNode(p1, 1));
/* let p1 = new ListNode(-3);
let p2 = new ListNode(5);
let p3 = new ListNode(99);
p1.next = p2;
p2.next = p3;
console.log(deleteNode(p1, 99)); */
