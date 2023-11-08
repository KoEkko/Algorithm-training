function monotoneIncreasingDigits(n: number): number {
  let strArr:number[] = String(n)
    .split("")
    .map((i) => parseInt(i));
  let flag = strArr.length;
  for(let i = strArr.length - 1; i > 0 ; i--) {
    if(strArr[i - 1] > strArr[i]) {
      strArr[i - 1] -=1;
      flag = i;
    }
  }
  for(let i = flag; i < strArr.length; i++) {
    strArr[i] = 9;
  }
  return parseInt(strArr.join(""));
}
