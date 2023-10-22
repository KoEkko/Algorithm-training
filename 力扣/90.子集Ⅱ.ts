function subsetsWithDup(nums: number[]): number[][] {
  function backtracking(nums: number[], startIndex: number, route: number[]) {
    resArr.push([...route]);
    if(startIndex >= length) return;
    for(let i = startIndex; i < length; i ++) {
      if(i > startIndex && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      route.push(nums[i]);
      used[i] = true;
      backtracking(nums, i + 1, route);
      route.pop();
      used[i] = false;
    }
  }
  const resArr: number[][] = [];
  const length: number = nums.length;
  const used: boolean[] = new Array(length).fill(false);
  backtracking(
    nums.sort((a, b) => a - b),
    0,
    []
  );
  return resArr;
}

