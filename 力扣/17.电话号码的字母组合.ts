function letterCombinations(digits: string): string[] {
  if (digits === "") return [];
  const strMap: { [index: string]: string[] } = {
    1: [],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  function backtracking(digits:string, curIndex:number, route: string[]) {
    if(curIndex === digits.length) {
      resArr.push(route.join(""));
      return;
    }
    let tempArr: string[] = strMap[digits[curIndex]];
    for(let i = 0, length = tempArr.length; i < length; i++) {
      route.push(tempArr[i]);
      backtracking(digits, curIndex + 1, route);
      route.pop();
    }
  }
  const resArr: string[] = [];
  backtracking(digits, 0 , []);
  return resArr;
}
