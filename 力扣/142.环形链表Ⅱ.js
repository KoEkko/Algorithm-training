var detectCycle = function(head) {
  let fast = head, slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow) {
      let index1 = fast;
      let index2 = head;
      while(index1 !== index2) {
        index1 = index1.next;
        index2 = index2.next;
      }
      return index1;
    }
  }
  return null;
}