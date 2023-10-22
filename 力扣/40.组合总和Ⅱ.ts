function combinationSum2(candidates: number[], target: number): number[][] {
  function backtracking(
    candidates: number[],
    target: number,
    startIndex: number,
    sum: number,
    route: number[]
  ) {
    if (sum > target) return;
    if (sum === target) {
      resArr.push([...route]);
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      const cur = candidates[i];
      if (cur > target - sum ||(i > 0 && cur === candidates[i - 1] && !used[i - 1])) continue;
      route.push(cur);
      used[i] = true;
      backtracking(
        candidates,
        target,
        i + 1,
        sum + cur,
        route
      );
      route.pop();
      used[i] = false;
    }
  }
  const resArr: number[][] = [];
  const used = new Array(candidates.length).fill(false);
  backtracking(
    candidates.sort((a, b) => a - b),
    target,
    0,
    0,
    []
  );
  return resArr;
}
