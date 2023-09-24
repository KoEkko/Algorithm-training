function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function(head, n) {
  const dummyNode = new ListNode();
  let fast = dummyNode, slow = dummyNode;
  n += 1;
  while(n-- && fast) {
    fast = fast.next;
  }
  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummyNode.next;
}


