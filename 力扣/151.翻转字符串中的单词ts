function delExtraSpace(str: string[]): void {
  let left = 0,
    right = 0,
    arrLength = str.length;
  // 找到字符串中的首个字母
  while (right < arrLength && str[right] === " ") {
    right++;
  }
  // 找到字母后开始进行替换，对原数组进行操作
  while (right < arrLength) {
    if (str[right] === " " && str[right - 1] === " ") {
      right++;
      continue;
    }
    str[left++] = str[right++];
  }
  // 经过以上处理后，如果字符串尾部没有空格了就是正常情况，但是有空格的话，就是例外了，需要进行特殊处理
  if (str[left - 1] === " ") {
    str.length = left - 1;
  } else {
    str.length = left;
  }
}
function reverseWord(str: string[], start: number, end: number) {
  let temp;
  while (start < end) {
    temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
}
function reverseWords(s: string): string {
  let str = s.split("");
  delExtraSpace(str);
  let length = str.length;
  reverseWord(str, 0, length - 1);
  let start = 0,
    end = 0;
  while (start < length) {
    end = start;
    while (str[end] !== " " && end < length) {
      end++;
    }
    reverseWord(str, start, end - 1);
    start = end + 1;
  }
  return str.join("");
}
