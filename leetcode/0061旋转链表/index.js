/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head == null || k <= 0) {
    return head;
  }
  let p = new ListNode(-1);
  p.next = head;
  let cur = p,
    low = p,
    fast = p;
  // 统计链表个数
  let n = 0;
  while (cur != null) {
    cur = cur.next;
    n++;
  }
  if (n == 0 || k % (n - 1) == 0) {
    return head;
  }
  //还有一个边界条件不要忘了，k可能大于n，所以要取模
  n = k % (n - 1);
  //快指针先移动n步
  while (fast.next != null && n > 0) {
    fast = fast.next;
    n--;
  }
  //快指针，慢指针一起移动，找到需要切割的点
  while (fast.next != null) {
    low = low.next;
    fast = fast.next;
  }
  fast.next = p.next;
  p.next = low.next;
  low.next = null;
  return p.next;
};
let p1 = new ListNode(0);
let p2 = new ListNode(1);
let p3 = new ListNode(2);
p1.next = p2;
p2.next = p3;
console.log(rotateRight(p1, 4));
