function eraseOverlapIntervals(intervals: number[][]): number {
  if(intervals.length === 0 ) return 0;
  let resCount = 0;
  for(let i = 1 ;i < intervals.length; i++) {
    if(intervals[i][0] < intervals[i - 1][1]) {
      resCount++;
      intervals[i][1] = Math.min(intervals[i][1], intervals[i- 1][1])
    }
  }
  return resCount;
};