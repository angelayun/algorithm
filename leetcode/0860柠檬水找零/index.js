/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  var i = -1;
  var n5 = 0;
  var n10 = 0;
  while (++i < bills.length) {
    if (bills[i] === 5) {
      n5++;
      continue;
    } else if (bills[i] === 10) {
      n5--;
      n10++;
    } else if (n10) {
      n5--;
      n10--;
    } else {
      n5 -= 3;
    }
    if (n5 < 0) {
      return false;
    }
  }
  return true;
};
console.log(lemonadeChange([5, 5, 5, 10, 20]));
