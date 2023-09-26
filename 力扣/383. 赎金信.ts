var canConstruct = function(ransomNote:string , magazine:string):boolean {
  if(magazine.length < ransomNote.length) return false;
  const pivot = 'a'.charCodeAt(0);
  const res = new Array(26).fill(0);
  for(const i of magazine) {
    const index = i.charCodeAt(0) - pivot;
    res[index]++;
  }
  for(const i of ransomNote) {
    const index = i.charCodeAt(0) - pivot;
    if(!res[index]) return false;
    else res[index]--;
  }
  return true;
}