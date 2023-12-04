function countSubstrings(s: string): number {
  /**
   * dp[i][j] 表示 s[i] 到 s[j] 之间的字符串是否是回文子串
   */
  const dp: boolean[][] = new Array(s.length)
    .fill(0)
    .map((_) => new Array(s.length).fill(false));
  let result: number = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
          result++;
        } else {
          if (dp[i + 1][j - 1]) {
            dp[i][j] = true;
            result++;
          }
        }
      }
    }
  }
  return result;
}
