function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  // 虚拟头节点
  const dummyNode = new ListNode();
  dummyNode.next = head;
  let prev = dummyNode;  // 利用移动的前一个结点
  while(prev.next && prev.next.next) {
    let first = prev.next; // 记录第一个节点
    prev.next = prev.next.next; // 前一个节点指向第二个节点
    first.next = prev.next.next; // 第一个节点指向第三个节点
    prev.next.next = first; // 第二个节点指向第一个节点
    prev = prev.next.next; // 移动 前一个结点 到下次操作的前一个节点也就是第二个节点
  }
  return dummyNode.next;
};
