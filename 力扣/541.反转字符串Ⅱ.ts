function reverseStr(s: string, k: number): string {
  const stringArray = s.split("");
  for(let i = 0, length = stringArray.length; i < length ; i += 2 * k) {
    let left = i;
    let right = (i + k - 1) >= length ? length - 1 : i + k - 1;
    let temptString:string;
    while(left < right) {
      temptString = stringArray[left];
      stringArray[left] = stringArray[right];
      stringArray[right] = temptString;
      left++;
      right--;
    }
  }
  return stringArray.join("");
};