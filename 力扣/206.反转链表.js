
// 双指针 解法
var reverseList = function (head) {
  let cur = head,
      pre = null;
  while(cur) {
    // 在改变cur之前，要先保存cur.next，不让会找不到元素
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

// 递归 解法

function reverse(cur, pre) {
  if(cur === null) return pre;
  let temp = cur.next;
  cur.next = pre;
  return reverse(temp, cur);
}

var reverseList = function(head) {
  return reverse(head,null)
}