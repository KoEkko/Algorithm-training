function testWeightBagProblem(
  weight: number[],
  values: number[],
  size: number
): number {
  /**
   * dp[i][j]: 前i个物品，背包容量为j的最大价值
   * dp[0][*]: 当 j > weight[0] 的时候，dp[0][x] = values[0]
   * dp[*][0]: 0
   */
  const goodLength: number = weight.length;
  const dp: number[][] = new Array(goodLength)
    .fill(0)
    .map(() => new Array(size + 1).fill(0));

  // initial
  for (let i = weight[0]; i <= size; i++) {
    dp[0][i] = values[0];
  }

  for (let i = 1; i < goodLength; i++) {
    for (let j = 0; j <= size; j++) {
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + values[i]);
    }
  }
  return dp[goodLength - 1][size];
}
const weight = [1, 3, 4];
const value = [15, 20, 30];
const size = 4;
console.log(testWeightBagProblem(weight, value, size));



