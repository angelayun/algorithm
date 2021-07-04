/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 反转从位置 left 到位置 right 的链表节点
var reverseBetween = function (head, left, right) {
  // 创建虚拟头结点，它指向整个链的真实头结点
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let count = 0;
  // 拿到 left-1 结点，和 right 结点，维护两个指针走到这俩结点
  let p1 = dummyHead,
    p2 = dummyHead;
  left--;
  // p1 p2 指针走left-1步
  while (count < left) {
    p1 = p1.next;
    p2 = p2.next;
    count++;
  }
  // p1 现在指向 left-1 结点
  while (count < right) {
    // 继续让 p2 走到 right 结点
    p2 = p2.next;
    count++;
  }
  // p2 现在指向第 right 个结点
  // p2.Next 即 right+1 结点开始的链，即接收链，需要一个dummyhead2
  const dummyHead2 = new ListNode();
  // dummyHead2指向 right+1 结点
  dummyHead2.next = p2.next;
  // 断开n与n+1，让 left~right 链的末尾指向null
  p2.next = null;
  //当前要翻到后面去的点 最先开始的是 left 点——p1.Next
  let reverseNode = p1.next;
  // 直到没有需要翻转的reverseNode
  while (reverseNode) {
    // reverseNode的Next先保存一下
    const temp = reverseNode.next;
    // 翻过去的点，指向接收链的头结点，即dummyHead2.Next
    reverseNode.next = dummyHead2.next;
    // dummyHead2的Next换人，头结点换成了新来的reverseNode
    dummyHead2.next = reverseNode;
    // 更新下一个要翻到后面去的reverseNode
    reverseNode = temp;
  }
  // 前半部分的固定链，接上接收链的头结点
  p1.next = dummyHead2.next;
  // 返回整条链
  return dummyHead.next;
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
console.log(reverseBetween(p1, 2, 4));
