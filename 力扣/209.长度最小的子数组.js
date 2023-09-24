var minSubArrayLen = function(target, nums) {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let i = 0;
  let len = 0;
  for(let j = 0; j < nums.length ; j++) {
      sum += nums[j];
      while(sum >= target) {
          len = j - i + 1;
          result = Math.min(result, len);
          sum = sum - nums[i];
          i++; 
      }
  }
  if (result === Number.MAX_SAFE_INTEGER) return 0;
  return result;
};