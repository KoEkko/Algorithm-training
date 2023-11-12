function integerBreak(n:number):number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[2] = 1;
  for(let i = 3 ;i <= n; i++) {
    for(let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
}