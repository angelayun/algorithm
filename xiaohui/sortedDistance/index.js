function Bucket(max, min) {
  this.min = min;
  this.max = max;
}
function getMaxSortedDistance(arr) {
  //1.得到数列的最大值和最小值，并算出差值d
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let d = max - min;
  //如果max和min相等，说明数组所有元素都相等，返回0
  if (d == 0) {
    return 0;
  }
  //2.初始化桶
  let bucketNum = arr.length;
  let buckets = new Array(bucketNum);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = new Bucket(null, null);
  }
  //3.遍历原始数组，确定每个桶的最大最小值
  for (let i = 0; i < arr.length; i++) {
    //确定数组元素所归属的桶下标
    let index = Math.floor(((arr[i] - min) * (bucketNum - 1)) / d);
    if (buckets[index].min == null || buckets[index].min < arr[i]) {
      buckets[index].min = arr[i];
    }
    if (buckets[index].max == null || buckets[index].max > arr[i]) {
      buckets[index].max = arr[i];
    }
  }
  //4.遍历桶，找到最大差值
  let leftMax = buckets[0].max;
  let maxDistance = 0;
  for (let i = 1; i < buckets.length; i++) {
    if (buckets[i].min == null) {
      continue;
    }
    maxDistance = Math.max(maxDistance, buckets[i].min - leftMax);
    leftMax = buckets[i].max;
  }
  return maxDistance;
}
let arr = [2, 6, 3, 4, 5, 10, 9];
console.log(getMaxSortedDistance(arr));
