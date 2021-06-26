function bigNumberSum(numA, numB) {
  //1.把两个大整数用数组逆序存储，数组长度等于较大整数位数+1
  let maxLength = numA.length > numB.length ? numA.length : numB.length;
  let arrA = new Array(maxLength + 1).fill(0);
  for (let i = 0; i < numA.length; i++) {
    arrA[i] = numA[numA.length - i - 1] - 0;
  }
  let arrB = new Array(maxLength + 1).fill(0);
  for (let i = 0; i < numB.length; i++) {
    arrB[i] = numB[numB.length - i - 1] - 0;
  }
  //2.构建result数组，数组长度等于较大整数位数+1
  let result = new Array(maxLength + 1).fill(0);
  //3.遍历数组，按位相加
  for (let i = 0; i < result.length; i++) {
    let temp = result[i] + arrA[i] + arrB[i];
    if (temp >= 10) {
      temp = temp - 10;
      result[i + 1] += 1;
    }
    result[i] = temp;
  }
  //4.把result数组再次逆序并转成String
  let s = "";
  //是否找到大整数的最高有效位
  let findFirst = false;
  for (let i = result.length - 1; i >= 0; i--) {
    if (!findFirst) {
      if (result[i] == 0) {
        continue;
      }
      findFirst = true;
    }
    s += result[i];
  }
  return s;
}
console.log(bigNumberSum("426709752318", "95481253129"));
console.log(bigNumberSum("123", "456"));
