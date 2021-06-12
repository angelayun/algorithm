/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let p1 = head;
  let p2 = head;
  for (let index = 1; index < k; index++) {
    if (p2.next) {
      p2 = p2.next;
    } else {
      throw new Error("链接的总长度小于k");
    }
  }
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
// 下面是测试数据
let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);
let p4 = new ListNode(4);
let p5 = new ListNode(5);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
console.log(getKthFromEnd(p1, 2));
