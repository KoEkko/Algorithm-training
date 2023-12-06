function largestRectangleArea(heights: number[]):number {
  heights.push(0); // 是防止数组是递增的，不会进入单调栈的逻辑
  const length = heights.length;
  const stack: number[] = [];
  stack.push(0);
  let res = 0;
  for(let i = 1; i < length; i ++) {
    let top = stack[stack.length - 1];
    while(stack.length && heights[i] < heights[top]) {
      const mid = stack.pop()!;
      const left = stack.length > 0 ? stack[stack.length - 1] : -1;
      const right = i;
      const w = right - left - 1;
      const h = heights[mid];
      res = Math.max(res, w * h);
      top = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return res;
}

