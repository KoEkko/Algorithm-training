function maxSubArray(nums:number[]):number {
  let curSum = 0;
  let result = -Infinity;
  for(let i =0 ; i < nums.length; i++) {
    curSum += nums[i];
    result = Math.max(curSum, result);
    if(curSum < 0) curSum = 0;
  }
  return result;
}