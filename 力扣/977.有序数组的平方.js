// var sortedSquares = function(nums) {
//   for(let i = 0 ; i < nums.length; i++) {
//       nums[i] = Math.pow(nums[i],2);
//   }
//   return nums.sort((a,b) => a - b );
// };

// 双指针写法
var sortedSquares = function (nums) {
  let newArr = new Array(nums.length);
  let k = newArr.length - 1;
  let i = 0,
    j = newArr.length - 1;
  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      newArr[k] = Math.pow(nums[i], 2);
      i++;
      k--;
    } else {
      newArr[k] = Math.pow(nums[j], 2);
      j--;
      k--;
    }
  }
  return newArr;
};

const nums1 = [-4, -1, 0, 3, 10];
const nums2 = [-7, -3, 2, 3, 11];

console.log(sortedSquares(nums1));
console.log(sortedSquares(nums2));
