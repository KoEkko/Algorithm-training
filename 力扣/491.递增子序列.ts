function findSubsequences(nums:number[]):number[][] {
  function backtracking(nums:number[], startIndex:number, route: number[]) {
    let length:number = nums.length;
    if(route.length >= 2) {
      resArr.push([...route]);
    }
    const usedSet: Set<number> = new Set();
    for(let i = startIndex; i < length; i++) {
      if(nums[i] < route[route.length - 1] || usedSet.has(nums[i])) continue;
      usedSet.add(nums[i]);
      route.push(nums[i]);
      backtracking(nums, i + 1, route);
      route.pop();
    }
  }
  const resArr:number[][] = [];
  backtracking(nums, 0, []);
  return resArr;
}