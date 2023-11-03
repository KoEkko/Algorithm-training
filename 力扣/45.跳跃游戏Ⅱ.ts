function jump(nums:number[]):number {
  let step = 0;
  let curIndex = 0;
  let nextIndex = 0;
  for(let i = 0; i < nums.length; i ++) {
    nextIndex = Math.max(nextIndex, i + nums[i]);
    if(i === curIndex) {
      if(curIndex < nums.length - 1) {
        curIndex = nextIndex;
        step++
      } else {
        return step;
      }
    }
  }
  return step;
}