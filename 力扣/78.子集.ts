function subsets(nums:number[]):number[][] {
  const resArr:number[][] = [];
  function backtracking(nums:number[], startIndex:number, route:number[]) {
    resArr.push([...route]);
    const length = nums.length;
    if(startIndex >= length) return;
    for(let i = startIndex; i < length ; i++) {
      route.push(nums[i]);
      backtracking(nums, i + 1, route);
      route.pop();
    }
  }
  backtracking(nums, 0, []);
  return resArr;
}