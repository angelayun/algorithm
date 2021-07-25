/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (jug1Capacity + jug2Capacity < targetCapacity) return false;
  if (jug1Capacity == 0 || jug2Capacity == 0)
    return targetCapacity == 0 || jug1Capacity + jug2Capacity == targetCapacity;
  let gcd = 0,
    i = 0;
  while (i < jug1Capacity || i < jug2Capacity) {
    i++;
    if (jug1Capacity % i == 0 && jug2Capacity % i == 0) gcd = i;
  }
  return targetCapacity % gcd == 0;
};
