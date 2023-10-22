function partition(s:string): string[][] {
  function isPalindrome(str:string, startIndex:number, endIndex:number) {
    for(; startIndex <= endIndex; startIndex++, endIndex--) {
      if(str[startIndex] !== str[endIndex]) return false;
    }
    return true;
  }
  function backtracking(str:string, startIndex:number) {
    if(startIndex >= str.length) {
      resArr.push([...path]);
      return;
    }
    for(let i = startIndex; i < str.length; i ++) {
      if(!isPalindrome(str, startIndex, i)) continue;
      path.push(str.substring(startIndex, i + 1));
      backtracking(str, i + 1);
      path.pop();
    }
  }
  const resArr:string[][] = [];
  const path:string[] = [];
  backtracking(s, 0);
  return resArr;
}