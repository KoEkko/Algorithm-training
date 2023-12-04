function maxProfit(prices: number[]): number {
  const length = prices.length;
  if (length === 0) return 0;
  const dp: number[][] = new Array(length)
    .fill(0)
    .map((_) => new Array(5).fill(0));
  dp[0][1] = -prices[0];
  dp[0][3] = -prices[0];
  for (let i = 1; i < length; i++) {
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  }
  return Math.max(dp[length - 1][2], dp[length - 1][4]);
}
