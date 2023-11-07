function findMinArrowShots(points:number[][]):number {
  let resCount:number = 1;
  if(points.length === 0) return 0;
  if(points.length === 1) return 1;
  let right = points[0][1]; //右边界
  let tempPoint:number[] = [];
  for(let i = 1; i < points.length; i ++) {
    tempPoint = points[i];
    if(tempPoint[0] > right) {
      resCount++;
      right = tempPoint[1]
    } else {
      right = Math.min(tempPoint[1], right);
    }
  }
  return resCount;
}