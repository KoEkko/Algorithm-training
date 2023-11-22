function climb(n: number, m: number) {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i - j >= 0) dp[i] += dp[i - j];
    }
  }
  return dp[n];
}
