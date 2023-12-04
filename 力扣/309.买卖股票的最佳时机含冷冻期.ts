function maxProfit(prices: number[]): number {
  /**
   * dp[i][0]: 持有股票
   * dp[i][1]: 保持卖出股票
   * dp[i][2]: 卖出股票
   * dp[i][3]: 冷冻期
   */
  const length = prices.length;
  const dp: number[][] = new Array(length)
    .fill(0)
    .map((_) => new Array(4).fill(0));
  dp[0][0] = -prices[0];
  dp[0][1] = dp[0][2] = dp[0][3] = 0;
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][0],
      Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]
    );
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
    dp[i][2] = dp[i - 1][0] + prices[i];
    dp[i][3] = dp[i - 1][2];
  }
  const lastDay = dp[length - 1];
  return Math.max(lastDay[1], lastDay[2], lastDay[3]);
}
