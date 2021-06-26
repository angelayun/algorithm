/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return lists
    .reduce((p, n) => {
      while (n) {
        p.push(n), (n = n.next);
      }
      return p;
    }, [])
    .sort((a, b) => a.val - b.val)
    .reduceRight((p, n) => ((n.next = p), (p = n), p), null);
};
let lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
let result = mergeKLists(lists);
console.log(lists);
