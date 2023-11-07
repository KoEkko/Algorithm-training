function partitionLabels(s: string): number[] {
  const hashMap: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], i);
  }
  let left = 0,
    right = 0;
  const res: number[] = [];
  for (let i = 0; i < s.length; i++) {
    right = Math.max(hashMap.get(s[i])!, right);
    if (i === right) {
      res.push(right - left + 1);
      left = right + 1;
    }
  }
  return res;
}
