function  largestSumAfterKNegations (nums:number[], k:number):number {
  nums.sort((a,b) => Math.abs(b) - Math.abs(a));
  let sum = 0; 
  for(let i = 0; i < nums.length; i ++) {
    if(nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
    sum += nums[i];
  }
  if( k % 2 > 0) {
    sum -= 2 * nums[nums.length - 1];
  }
  return sum;
}