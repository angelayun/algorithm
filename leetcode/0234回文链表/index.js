/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 入参校验
  if (head == null || head.next == null) {
    return true;
  }
  let p = new ListNode(-1);
  let fast = p,
    low = p;
  p.next = head;
  //快慢指针不断迭代，找到中间节点
  while (fast != null && fast.next != null) {
    low = low.next;
    fast = fast.next.next;
  }
  // 指向中间节点
  let cur = low.next;
  let pre = null;
  low.next = null;
  // 指向头节点
  low = p.next;
  //将链表一分为二之后，反转链表后半部分
  while (cur != null) {
    // 先把下一个指针保存
    let temp = cur.next;
    // 指向前一个指针
    cur.next = pre;
    // 各指针向前走一步
    pre = cur;
    cur = temp;
  }
  //将链表前半部分和 反转的后半部分对比
  while (pre != null) {
    if (low.val != pre.val) {
      return false;
    }
    low = low.next;
    pre = pre.next;
  }
  return true;
};

let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(2);
let p4 = new ListNode(1);
p1.next = p2;
p2.next = p3;
p3.next = p4;
console.log(isPalindrome(p1));
