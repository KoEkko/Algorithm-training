function merge(intervals:number[][]):number[][] {
  intervals.sort((a,b) => {
    return a[0] - b[0]
  })
  const resArr:number[][] = [];
  resArr[0] = [...intervals[0]];
  for(let i = 1; i < intervals.length; i++) {
    let tempArr = intervals[i];
    let last = resArr[resArr.length - 1];
    if(tempArr[0] <= last[1]) {
      last[1] = Math.max(last[1], tempArr[1]);
    } else {
      resArr.push([...intervals[i]]);
    }
  }
  return resArr;
}