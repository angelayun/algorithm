function shellSort(nums) {
  //希尔排序的增量
  let d = nums.length;
  while (d > 1) {
    //使用希尔增量的方式，即每次折半
    d = Math.floor(d / 2);
    for (let x = 0; x < d; x++) {
      for (let i = x + d; i < nums.length; i = i + d) {
        let temp = nums[i];
        let j;
        //
        for (j = i - d; j >= 0 && nums[j] > temp; j = j - d) {
          nums[j + d] = nums[j];
        }
        nums[j + d] = temp;
      }
    }
  }
  return nums;
}
let nums = [3, 4, 2, 1, 5, 6, 7, 8, 30, 50, 1, 33, 24, 5, -4, 7, 0];
// let nums = [12, 1, 3, 46, 5, 0, -3, 12, 35, 16];
console.log(shellSort(nums, 0, nums.length - 1));
