function combine(n: number, k: number): number[][] {
  const resArr: number[][] = [];
  function backtracking(
    n: number,
    k: number,
    startIndex: number,
    tempArr: number[]
  ) {
    if (tempArr.length === k) {
      resArr.push(tempArr.slice());
      return;
    }
    for (let i = startIndex; i <= n - k + 1 + tempArr.length; i++) {
      tempArr.push(i);
      backtracking(n, k, i + 1, tempArr);
      tempArr.pop();
    }
  }
  backtracking(n, k, 1, []);
  return resArr;
}
