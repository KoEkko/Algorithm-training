function maxProfit(prices:number[]):number {
  let result = 0;
  for(let i = 1; i < prices.length; i++) {
    result += Math.max(0, prices[i] - prices[i - 1]);
  }
  return result;
}