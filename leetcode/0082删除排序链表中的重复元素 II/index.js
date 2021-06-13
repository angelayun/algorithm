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
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  if (head.val == head.next.val) {
    while (head.next != null && head.val == head.next.val) {
      head = head.next;
    }
    return deleteDuplicates(head.next);
  } else {
    head.next = deleteDuplicates(head.next);
    return head;
  }
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 也就是说dummy 和 pre 是同一个指针
  let dummy = new ListNode();
  // dummy的存在只是为了简化代码当中非空的判断逻辑
  dummy.next = head;
  let pre = dummy;
  while (head != null && head.next != null) {
    if (head.val == head.next.val) {
      while (head.next != null && head.val == head.next.val) {
        head = head.next;
      }
      // 当一连串相同的情况  直接让前一个链表指针指向相同链表最后一个节点的下一个节点
      pre.next = head.next;
    } else {
      // 让pre 始终指向前一个链表节点
      pre = head;
    }
    head = head.next;
  }
  return dummy.next;
};
let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);
let p4 = new ListNode(3);
let p5 = new ListNode(4);
let p6 = new ListNode(4);
let p7 = new ListNode(5);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
p5.next = p6;
p6.next = p7;
console.log(deleteDuplicates(p1));

/* let p1 = new ListNode(1);
let p2 = new ListNode(1);
let p3 = new ListNode(1);
let p4 = new ListNode(2);
let p5 = new ListNode(3);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
console.log(deleteDuplicates(p1)); */
