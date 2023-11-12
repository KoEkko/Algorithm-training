function canPartition(nums:number[]):boolean {
  const sum = nums.reduce((p, c) => p + c) ;
  if( sum & 1) return false;
  const dp:number[] = new Array(sum / 2 + 1).fill(0);
  for(let i = 0; i < nums.length; i++) {
    for(let j = sum / 2; j >= nums[i]; j --) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if(dp[j] === sum / 2) return true;
    }
  }
  return dp[sum / 2] === sum / 2;
}



