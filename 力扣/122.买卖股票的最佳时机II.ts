function maxProfit(prices: number[]): number {
  const length = prices.length;
  if (length === 0) return 0;
  const dp = new Array(length).fill(0).map((_) => new Array(2).fill(0));
  dp[0][0] = -prices[0];
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return dp[length - 1][1];
}


// 贪心

function maxProfit(prices:number[]):number {
  let result = 0;
  for(let i = 1; i < prices.length; i++) {
    result += Math.max(0, prices[i] - prices[i - 1]);
  }
  return result;
}