function topKFrequent(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map();
  for (let i of nums) {
    countMap.set(i, (countMap.get(i) || 0) + 1);
  }
  return [...countMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => i[0]);
}
