/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  m--;
  n--;
  while (m >= 0 || n >= 0) {
    //注意两个边界条件，i<0以及j<0，这表示一个数组已经拷贝完了
    if (m < 0) {
      nums1[k--] = nums2[n--];
    } else if (n < 0) {
      nums1[k--] = nums1[m--];
    } else if (nums1[m] <= nums2[n]) {
      nums1[k--] = nums2[n--];
    } else {
      nums1[k--] = nums1[m--];
    }
  }
  console.log(nums1);
};
/* let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3; */
let nums1 = [1],
  m = 1,
  nums2 = [],
  n = 0;
console.log(merge(nums1, m, nums2, n));
