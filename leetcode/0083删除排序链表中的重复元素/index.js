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
  let i = head,
    j = head;
  while (j != null) {
    /* if (i.val == j.val) {
      //i和j相当，啥都不做，j继续前进
      j = j.next;
    } else {
      //j继续前进
      i = i.next;
      i.val = j.val;
      //j继续前进
      j = j.next;
    } */
    // 更简洁的代码
    if (i.val != j.val) {
      //如果i不等于j，则i前进一位，然后将j的值赋给i
      i = i.next;
      i.val = j.val;
    }
    //不管i是否等于j，j每次都前进一位
    j = j.next;
  }
  i.next = null;
  return head;
};
