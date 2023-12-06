function trap(height: number[]): number {
  let res = 0;
  const length = height.length;
  const stack: number[] = [];
  stack.push(0);
  for (let i = 1; i < length; i++) {
    let top = stack[stack.length - 1];
    while (stack.length && height[i] > height[top]) {
      let mid = stack.pop()!;
      if (stack.length > 0) {
        const left = stack[stack.length - 1];
        const h = Math.min(height[i], height[left]) - height[mid];
        const w = i - left - 1;
        res += h * w;
        top = stack[stack.length - 1];
      }
    }
    stack.push(i);
  }
  return res;
}
