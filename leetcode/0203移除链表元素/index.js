/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let p = new ListNode(0);
  p.next = head;
  //因为要删除的可能是链表的第一个元素，所以用一个h节点来做处理
  //最后只要返回h的下一个节点即可
  let h = p;
  while (p.next != null) {
    //如果p的下一个节点的值==val
    if (p.next.val == val) {
      //p就指向下下一个，这就删掉了指定的节点
      p.next = p.next.next;
      //因为循环最后还有一个p=p.next，所以要跳过
      continue;
    }
    p = p.next;
  }
  return h.next;
};
