/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 0,
      high = n;
    let firstBad = n;
    while (low <= high) {
      let mid = low + ((high - low) >> 1);
      if (isBadVersion(mid)) {
        firstBad = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return firstBad;
  };
};
console.log(solution(5));
