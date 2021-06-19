// 非递归的方法
var threeSum = function (nums) {
  if (nums == null || !nums.length || nums.length < 3) {
    return [];
  }
  // 先排序
  nums.sort((a, b) => a - b);
  let result = [];
  //第三个指针k最多到下标8位置，因为后面两个位置需要留给另外两个指针
  for (let i = 0; i < nums.length - 2; i++) {
    //nums[k]>0，说明后面的元素肯定也大于0，最后结果肯定>0，故直接跳出
    if (nums[i] > 0) {
      break;
    }
    //如果当前元素和前面一个元素一样，忽略重复元素
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      //如果三数之和>0，说明最右边的值太大了
      if (sum > 0) {
        end--;
        while (start < end && nums[end + 1] == nums[end]) {
          end--;
        }
      } else if (sum < 0) {
        start++;
        while (start < end && nums[start - 1] == nums[start]) {
          start++;
        }
      } else {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        //同时左指针往右移动，右指针往左移动，
        //如果移动过程中碰到重复元素，则继续移动
        while (start < end && nums[start - 1] == nums[start]) {
          start++;
        }
        while (start < end && nums[end + 1] == nums[end]) {
          end--;
        }
      }
    }
  }
  return result;
};
// let nums = [-1, 0, 1, 2, -1, -4];

// let nums = [0];
let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
// 预期结果是
// [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
let result = threeSum(nums);
console.log(result);
