/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 这个代码很简洁  比书上写一堆解释还容易理解
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /* // pre 前面一个节点，反转之后是尾节点  所以默认指向空
  let pre = null;
  // 当前节点  第一次指向头节点
  let cur = head;
  while (cur != null) {
    // nxt指向head.next 因为head.next可能不存在，nxt在循环中定义，这样如果head为空就不会进入循环
    let nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre; */
  // 下面这样确实也可以
  /* if (head == null || head.next == null) {
    return head;
  }
  let cur = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return cur; */
};
let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);
let p4 = new ListNode(4);
let p5 = new ListNode(5);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
console.log(reverseList(p1));
