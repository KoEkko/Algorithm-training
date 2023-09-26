var intersection = function(nums1,nums2) {
  let resSet = new Set();
  let nums1Set = new Set(nums1);
  for(const i of nums2){
    if(nums1Set.has(i)) {
      resSet.add(i)
    }
  }
  return Array.from(resSet);  
}