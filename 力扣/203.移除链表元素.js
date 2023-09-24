// 常规解法

function ListNode(val,next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}


var removeElements = function(head,val) {
  while(head && head.val === val) head = head.next;
  let prev = head;
  while(prev && prev.next) {
    if(prev.next.val === val) prev.next = prev.next.next;
    else prev = prev.next;
  }
  return head;
}

// 虚拟头节点

var removeElements = function(head,val) {
  const dummyNode = new ListNode();
  dummyNode.next = head;
  let prev = dummyNode;
  while(prev.next) {
    if(prev.next.val === val) prev.next = prev.next.next;
    else prev = prev.next
  }
  return dummyNode.next;
}
