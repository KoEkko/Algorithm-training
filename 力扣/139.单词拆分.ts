function wordBreak(s:string, wordDict: string[]):boolean {
  const dp:boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for(let i = 1; i <=s.length; i++) {
    for(let j = 0; j < i; j++) {
      const tempStr:string = s.slice(j,i);
      if(wordDict.includes(tempStr) && dp[j] === true) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}