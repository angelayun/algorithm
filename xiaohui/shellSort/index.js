function shellSort(arr) {
  //希尔排序的增量
  let d = arr.length;
  while (d > 1) {
    //使用希尔增量的方式，即每次折半
    d = Math.floor(d / 2);
    for (let x = 0; x < d; x++) {
      for (let i = x + d; i < arr.length; i = i + d) {
        let temp = arr[i];
        let j;
        //
        for (j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
          arr[j + d] = arr[j];
        }
        arr[j + d] = temp;
      }
    }
  }
  return arr;
}
let arr = [3, 4, 2, 1, 5, 6, 7, 8, 30, 50, 1, 33, 24, 5, -4, 7, 0];
// let arr = [12, 1, 3, 46, 5, 0, -3, 12, 35, 16];
console.log(shellSort(arr, 0, arr.length - 1));
