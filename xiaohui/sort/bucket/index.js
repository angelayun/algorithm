function bucketSort(arr) {
  //1.得到数列的最大值和最小值，并算出差值d
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let d = max - min;
  //2.初始化桶  --简便的方式先创建桶的数量等于原始数组的元素数量
  let bucketNum = arr.length;
  let bucketList = new Array(bucketNum);
  for (let i = 0; i < bucketList.length; i++) {
    bucketList[i] = [];
  }
  //3.遍历原始数组，将每个元素放入桶中
  for (let i = 0; i < arr.length; i++) {
    // 区间跨度 = (最大值 - 最小值) / (桶的数量 - 1)
    let num = Math.floor(((arr[i] - min) * (bucketNum - 1)) / d);
    bucketList[num].push(arr[i]);
  }
  //4.对每个桶内部进行排序
  for (let k of bucketList) {
    k.sort((a, b) => a - b);
  }
  //5.输出全部元素
  let index = 0;
  let sortArr = new Array(arr.length).fill(0);
  for (let i = 0; i < bucketList.length; i++) {
    for (let j = 0; j < bucketList[i].length; j++) {
      sortArr[index++] = bucketList[i][j];
    }
  }
  return sortArr;
}
let arr = [4.12, 6.421, 0.0023, 3.0, 2.123, 8.122, 4.12, 10.09];
console.log(bucketSort(arr));
