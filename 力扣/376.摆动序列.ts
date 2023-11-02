function wiggleMaxLength(nums:number[]):number {
  let preDiff = 0;
  let curDiff = 0;
  let result = 1;
  for(let i =0; i < nums.length - 1; i ++) {
    curDiff = nums[i + 1] - nums[i];
    if(curDiff > 0 && preDiff <= 0 || curDiff < 0 && preDiff >= 0) {
      preDiff = curDiff;
      result++;
    }
  }
  return result;
}