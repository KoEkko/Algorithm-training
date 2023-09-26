var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const pivot = 'a'.charCodeAt();
  const map = new Array(26).fill(0);
  for(let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - pivot]++;
    map[t.charCodeAt(i) - pivot]--;
  }
  return map.every(i => i === 0);
};
