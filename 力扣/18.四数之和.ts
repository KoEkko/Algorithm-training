const fourSum = function (nums: number[], target: number) {
  nums.sort((a, b) => a - b);
  let first = 0,
    second = 0,
    third = 0,
    fourth = 0;
  const res:number[][] = [];
  for(; first < nums.length; first++) {
    if(first > 0 && nums[first] === nums[first - 1]) continue;
    for(second = first + 1; second < nums.length; second ++) {
      if((second - first) > 1 && nums[second] === nums[second - 1]) continue;
      third = second + 1;
      fourth = nums.length - 1;
      while(fourth > third) {
        let total = nums[first] + nums[second] + nums[third] + nums[fourth];
        if(total === target) {
          res.push([nums[first] , nums[second] , nums[third] , nums[fourth]]);
          third++;
          fourth--;
          while(nums[fourth] === nums[fourth + 1]) fourth--;
          while(nums[third] === nums[third - 1]) third++
        } else if(target > total) {
          third++
        } else {
          fourth--;
        }
      }
    }
  }
  return res;
};
