
function reverseString(s: string[]): void {
  let length = s.length;
  let left = 0, right = length - 1;
  let tempStr: string;
  while(left < right) {
    tempStr = s[left];
    s[left] = s[right];
    s[right] = tempStr;
    left++;
    right--;
  }
};