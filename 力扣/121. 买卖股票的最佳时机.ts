function maxProfit(prices: number[]): number {
  const length = prices.length;
  const dp: number[][] = new Array(length)
    .fill(0)
    .map((i) => new Array(2).fill(0));
  dp[0][1] = 0;
  dp[0][0] = -prices[0];
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
  }
  return dp[length - 1][1];
}
