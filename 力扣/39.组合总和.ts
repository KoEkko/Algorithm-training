function combinationSum(candidates: number[], target: number): number[][] {
  function backtracking(
    candidates: number[],
    target: number,
    sum: number,
    startIndex: number,
    route: number[]
  ) {
    if (sum > target) return;
    if (sum === target) {
      resArr.push(route.slice());
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if(candidates[i] > target - sum) break;
      route.push(candidates[i]);
      backtracking(candidates, target, sum + candidates[i], i, route);
      route.pop();
    }
  }
  const resArr: number[][] = [];

  backtracking(
    candidates.sort((a, b) => a - b),
    target,
    0,
    0,
    []
  );
  return resArr;
}
