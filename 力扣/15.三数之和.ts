var threeSum = function(nums:number[]) {
  nums.sort((a,b) => a - b);
  let left = 0,
      right = nums.length - 1;
  const res:number[][] = [];
  for(let i = 0; i < nums.length; i++) {
    // 剪枝
    if(nums[i] > 0 ) return res;
    if(i > 0 && nums[i] === nums[i - 1]) continue;  // 去重，小范围的结果必定被包含在大范围中
    left = i + 1;
    right = nums.length - 1;
    while(right > left) {
      let total = nums[i] + nums[right] + nums[left];
      if(total === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        right--;
        left++;
        while(nums[right] === nums[right + 1]) {
          right--
        } 
        while(nums[left] === nums[left- 1]) {
          left++;
        }
      } else if(total > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}