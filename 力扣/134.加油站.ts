function canCompleteCircuit(gas:number[], cost: number[]):number {
  let total = 0;
  let curGas = 0;
  let tempDiff = 0;
  let resIndex = 0;
  for(let i = 0 ; i < gas.length ; i++) {
    tempDiff = gas[i] - cost[i];
    curGas += tempDiff;
    total += tempDiff;
    if(curGas < 0) {
      resIndex = i + 1;
      curGas = 0
    }
  }
  if(total < 0) return -1;
  return resIndex;
}