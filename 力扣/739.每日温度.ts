function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const res = Array(n).fill(0);
  const stack: number[] = [];
  stack.push(0);
  for (let i = 1; i < n; i++) {
    const top = temperatures[stack[stack.length - 1]];
    if (temperatures[i] < temperatures[top]) {
      stack.push(i);
    } else if (temperatures[i] === temperatures[top]) {
      stack.push(i);
    } else {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const top = stack.pop()!;
        res[top] = i - top;
      }
      stack.push(i);
    }
  }
  return res;
}


// 精简版

function (temperatures:number[]):number[] {
  const n = temperatures.length;
  const res:number[] = Array(n).fill(0);
  const stack:number[] = [];
  stack.push(0);
  for(let i = 1; i < n; i++) {
    let top = stack[stack.length - 1];
    while(stack.length && temperatures[i] > temperatures[top]) {
      res[top] = i - top;
      stack.pop();
      top = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return res;
}