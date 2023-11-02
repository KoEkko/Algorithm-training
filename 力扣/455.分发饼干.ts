function findContentChildren(g:number[], s:number[]):number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a -b);
  const childLength = g.length;
  const cookieLength = s.length;
  let curChild = 0;
  let curCookie = 0;
  while( curChild < childLength && curCookie < cookieLength) {
    if(g[curChild] <= s[curCookie]) {
      curChild++;
    }
    curCookie++
  }
  return curChild;
}