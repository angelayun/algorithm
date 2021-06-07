function merge(arr, start, mid, end) {
  let temp = [];
  let pStart = start;
  let pEnd = mid + 1;
  while (pStart <= mid && pEnd <= end) {
    if (arr[pStart] < arr[pEnd]) {
      temp.push(arr[pStart++]);
    } else {
      temp.push(arr[pEnd++]);
    }
  }
  while (pStart <= mid) {
    temp.push(arr[pStart++]);
  }
  while (pEnd <= mid) {
    temp.push(arr[pEnd]);
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i + start] = temp[i];
  }
}
function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}
// let arr = [3, 4, 2, 1, 5, 6, 7, 8, 30, 50, 1, 33, 24, 5, -4, 7, 0];
let arr = [12, 1, 3, 46, 5, 0, -3, 12, 35, 16];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
