var twoSum = function(nums,target) {
  let map = new Map();
  let index = undefined;
  let resArr = [];
  for(let i = 0; i < nums.length; i++) {
    index = map.get(target - nums[i]);
    if(index !== undefined) {
      resArr = [i, index];
    }
    map.set(nums[i],i);
  }
  return resArr;
}