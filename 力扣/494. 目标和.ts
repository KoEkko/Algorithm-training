function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((p,c)=> p + c);
  const bagSize = Math.floor((target + sum) / 2);
  if((sum + target) % 2 === 1) return 0;
  if(Math.abs(target) > sum) return 0;
  const dp:number[] = new Array(bagSize + 1).fill(0);
  dp[0] = 1;
  for(let i = 0; i < nums.length; i++) {
      for(let j = bagSize; j >=nums[i]; j --) {
          dp[j] += dp[j - nums[i]]; 
      }
  }
  return dp[bagSize];
};