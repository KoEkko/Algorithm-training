function climbStairs(n: number): number {
  if(n <= 1) return n;
  let prev1 = 1, prev2 = 2;
  for(let i = 3; i <= n; i++) {
    let sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum
  }
  return prev2
};