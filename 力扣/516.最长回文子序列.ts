function longestPalindromeSubseq(s: string): number {
  /**
   * dp[i][j] 表示 s[i] 到 s[j]之间的字符串中有dp[i][j]个回文子序列
   */
  const dp: number[][] = new Array(s.length)
    .fill(0)
    .map((_) => new Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) dp[i][i] = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
    }
  }
  return dp[0][s.length - 1];
}
