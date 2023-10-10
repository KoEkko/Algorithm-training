function evalRPN(tokens: string[]): number {
  const operatorMap: Map<string, (a: number, b: number) => number> = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["*", (a, b) => a * b],
    ["/", (a, b) => Math.trunc(a / b)],
  ]);
  const helperStack:number[] = [];
  let a:number ,b:number;
  for(let t of tokens) {
    if(operatorMap.has(t)) {
      b = helperStack.pop()!;
      a = helperStack.pop()!;
      helperStack.push(operatorMap.get(t)!(a,b));
    } else {
      helperStack.push(Number(t));
    }
  }
  return helperStack.pop()!;
}
