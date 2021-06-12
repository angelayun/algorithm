/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }
  if (p.val != q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);

let p4 = new ListNode(1);
let p5 = new ListNode(2);
let p6 = new ListNode(3);
p1.next = p2;
p2.next = p3;

p4.next = p5;
p5.next = p6;
console.log(isSameTree(p1, p4));
