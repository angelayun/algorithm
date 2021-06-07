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
  let result = [];
  let len = lists.length;
  let min, minIndex;

  for (let index = 0; index < len; index++) {
    let cur = lists[index][0];
    if (cur != undefined && (min == undefined || cur < min)) {
      min = cur;
      minIndex = index;
    }
  }
  let minValue = lists[minIndex].splice(0, 1);
  result.push(minValue);
  // Math.min(arr)
};
let lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
let result = mergeKLists(lists);
console.log(lists);
