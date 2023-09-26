var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let map = new Map();
  let res = 0;
  for (const i of nums1) {
    for(const j of nums2) {
      let temp = i + j;
      let value = map.get(temp);
      map.set(temp, value ? value + 1 : 1);
    }
  }
  for (const i of nums3) {
    for (const j of nums4) {
      let temp = 0 - (i + j);
      const value = map.get(temp);
      value && (res += value);
    }
  }
  return res;
}