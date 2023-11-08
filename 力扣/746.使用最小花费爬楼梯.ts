// function minCostClimbingStairs(cost:number[]):number {
//   let dp: number[] = []; // 到达第i层的最小花费
//   dp[0] = 0;
//   dp[1] = 0;
//   for(let i = 2; i <= cost.length; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
//   }
//   return dp[cost.length];
// }


function minCostClimbingStairs(cost:number[]):number {
  if (cost.length <= 2) return 0;
  let dp1 = 0, dp2= 0;  // dp1 是爬一步， dp2 是爬两步
  for(let i = 2; i <= cost.length; i ++) {
    let sum = Math.min(dp1 + cost[i -1] , dp2 + cost[i - 2]);
    dp2 = dp1;
    dp1 = sum;
  }
  return dp1;
}