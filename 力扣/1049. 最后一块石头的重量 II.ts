function lastStoneWeightII(stones:number[]):number {
  const sum = stones.reduce((p,r) => p + r);
  const target = Math.floor(sum / 2);
  const dp:number[] = new Array(target + 1).fill(0);
  for(let i = 0 ; i < stones.length; i++) {
    for(let j = target ; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return sum - dp[target] * 2;
}