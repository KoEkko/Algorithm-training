function replaceSpace(s: string): string {
  let arr = s.split("");
  const oldLen = arr.length;
  let spaceNum = 0;
  for (let i of arr) {
    if (i === " ") {
      spaceNum++;
    }
  }
  arr.length = oldLen + 2 * spaceNum;
  let cur = oldLen - 1;
  for(let i = arr.length - 1; i >= 0; i--,cur--) {
    if(arr[cur] !== " ") {
      arr[i] = arr[cur];
    } else {
      arr[i] = "0";
      arr[--i] = "2";
      arr[--i] = "%";
    }
  }
  return arr.join("");
}
