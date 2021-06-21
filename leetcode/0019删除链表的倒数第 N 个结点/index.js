/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //增加一个特殊节点方便边界判断
  let p = new ListNode(-1);
  p.next = head;
  let a = p;
  let b = p;
  // b指针先往前走n步
  while (n > 0 && b != null) {
    --n;
    b = b.next;
  }
  //假设整个链表长5，n是10，那么第一次遍历完后b就等于空了
  //于是后面的判断就不用做了，直接返回
  if (b == null) {
    return head;
  }
  //第二次，b指针走到链表最后，a指针也跟着走
  //当遍历结束时，a指针就指向要删除的节点的前一个位置
  while (b.next != null) {
    a = a.next;
    b = b.next;
  }
  //删除节点并返回
  a.next = a.next.next;
  return p.next;
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
console.log(removeNthFromEnd(p1, 2));
