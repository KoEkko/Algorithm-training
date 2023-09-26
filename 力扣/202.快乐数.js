function cal(num) {
  return String(num).split("").reduce((pre,cur) => pre + (Number(cur) * Number(pre)), 0)
} 
var isHappy = function(num) {
  let map = new Set();
  while(num !== 1 && !map.has(num)) {
    map.add(num);
    num = cal(num);
  }
  return num === 1;
}