function findLengthOfLCIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1);
  let result = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1;
    result = Math.max(result, dp[i]);
  }
  return result;
}
