function maxProfit(k: number, prices: number[]): number {
  if (k === 0 || prices === null || prices.length < 2) return 0;
  const length = prices.length;
  const dp: number[][] = new Array(length)
    .fill(0)
    .map((_) => new Array(2 * k + 1).fill(0));
  for (let j = 1; j < 2 * k; j += 2) {
    dp[0][j] = -prices[0];
  }
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < 2 * k + 1; j++) {
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
      dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
    }
  }
  return dp[length - 1][2 * k];
}
