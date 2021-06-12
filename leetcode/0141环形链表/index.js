/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 快慢指针是一种思路
// 最先想到的方式应该是使用hashtable的方式把每个节点存储下来，访问一个节点的时候判断是否在hashtable里面存在相同结点
// https://leetcode-cn.com/u/chen-feng-11/
// 采用快慢指针法
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let p1 = head;
  let p2 = head;
  // while (p1 && p2 && p2.next) {
  // 可以简化成这样写
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 == p2) {
      return true;
    }
  }
  // 当快指针已经走到末尾指针还没有碰到慢指针就表示有环
  return false;
};

// 下面是测试数据
let p1 = new ListNode(-4);
let p2 = new ListNode(0);
let p3 = new ListNode(2);
let p4 = new ListNode(3);
p4.next = p3;
p3.next = p2;
p2.next = p1;
// 没有下面这个环就是返回false 否则返回true
// p1.next = p3;
console.log(hasCycle(p4));
