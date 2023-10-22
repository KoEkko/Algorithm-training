function combinationSum3(k:number, n:number):number[][] {
  function backtracking(k:number, n:number, sum:number, startIndex:number,tempArr:number[]) {
    if(sum > n) return;
    if(tempArr.length === k) {
      if(sum === n) {
        resArr.push(tempArr.slice());
      }
      return
    }
    for(let i = startIndex; i <= 9 - k + 1 + tempArr.length; i++) {
      tempArr.push(i);
      backtracking(k, n, sum + i, i + 1, tempArr);
      tempArr.pop();
    }
  }
  const resArr:number[][] = []
  backtracking(k,n,0,1,[]);
  return resArr;
}