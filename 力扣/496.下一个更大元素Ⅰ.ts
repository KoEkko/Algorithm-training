function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const n = nums1.length;
  const res: number[] = Array(n).fill(-1);
  const stack: number[] = []; // 单调栈
  const map: Map<number, number> = new Map();
  nums1.forEach((value, index) => {
    map.set(value, index);
  });
  stack.push(0); // push 0 是为了可以统一逻辑，比较num[0]
  for (let i = 1; i < nums2.length; i++) {
    let top = stack[stack.length - 1];
    while (stack.length && nums2[i] > nums2[top]) {
      let index = map.get(nums2[top]);
      if (index !== undefined) { //  避免为nums2[0]不在nums1中
        res[index] = nums2[i];
      }
      stack.pop();
      top = stack[stack.length - 1];
    }
    if (map.get(nums2[i]) !== undefined) {
      stack.push(i);
    }
  }
  return res;
}
