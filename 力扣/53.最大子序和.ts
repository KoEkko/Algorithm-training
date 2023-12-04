// 贪心算法
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

// 动态规划算法

function maxSubArray(nums:number[]):number {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  let result = dp[0];
  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    result = Math.max(result, dp[i]);
  }
  return result;  
}