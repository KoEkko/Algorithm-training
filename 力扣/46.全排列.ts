function permute(nums: number[]): number[][] {
  function backtracking(nums: number[], route: number[]) {
    if (route.length === nums.length) {
      resArr.push([...route]);
      return;
    }
    let tempVal: number;
    for (let i = 0; i < nums.length; i++) {
      tempVal = nums[i];
      if (!helperSet.has(tempVal)) {
        route.push(tempVal);
        helperSet.add(tempVal);
        backtracking(nums, route);
        route.pop();
        helperSet.delete(tempVal);
      }
    }
  }
  const resArr: number[][] = [];
  const helperSet: Set<number> = new Set();

  backtracking(nums, []);
  return resArr;
}
