/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 第一种解法  利用栈原理  后进者先出
var reversePrint = function (head) {
  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  let temp = [];
  while (arr.length) {
    temp.push(arr.pop());
  }
  return temp;
};
// 利用递归
var reversePrint = function (head) {
  return head == null ? [] : reversePrint(head.next).concat(head.val);
};
let p1 = new ListNode(1);
let p2 = new ListNode(3);
let p3 = new ListNode(2);
p1.next = p2;
p2.next = p3;
console.log(reversePrint(p1));
