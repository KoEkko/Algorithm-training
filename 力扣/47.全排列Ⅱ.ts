function permuteUnique(nums:number[]):number[][] {
  function backtracking(nums:number[], route: number[]) {
    if(route.length === nums.length) {
      resArr.push([...route]);
      return;
    }
    for(let i = 0; i < nums.length ; i ++) {
      if( i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      if(!used[i]) {
        used[i] = true;
        route.push(nums[i]);
        backtracking(nums, route);
        used[i] = false;
        route.pop();
      }
    }
  }
  const resArr:number[][] = [];
  const used: boolean[] = new Array(nums.length).fill(false);
  backtracking(nums.sort((a,b) => a - b), []);
  return resArr;
}