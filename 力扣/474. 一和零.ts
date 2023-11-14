function findMaxForm(strs: string[], m: number, n: number): number {
  const dp:number[][] = new Array(m + 1).fill(0).map((i) => new Array(n + 1).fill(0));
  
  for(let str of strs) {
    let numOfZero = 0,
        numOfOne = 0;
    for(let s of str) {
      if(s === '0') {
        numOfZero++;
      } else if(s === "1") {
        numOfOne++
      }
    }
    for(let i = m; i >= numOfZero; i--) {
      for(let j = n; j >= numOfOne; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - numOfZero][j - numOfOne] + 1)
      }
    }
  }
  return dp[m][n]
};