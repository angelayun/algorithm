/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 这里另外一个思路依旧是使用hashTable的方式，第一次有重复结点就是入环点
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head,
    slow = head;

  do {
    //检查是否有环 + 寻找相遇点 encounter point
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
  } while (fast != slow);

  fast = head;

  //寻找入口 entrance
  while (fast != slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
};
/* let p1 = new ListNode(3);
let p2 = new ListNode(2);
let p3 = new ListNode(0);
let p4 = new ListNode(-4);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p2;
 */
/* let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(0);
let p4 = new ListNode(-4);
p1.next = p2;
p2.next = p1; */
let p1 = new ListNode(1);
console.log(detectCycle(p1));
