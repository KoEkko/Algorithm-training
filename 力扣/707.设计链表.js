
var ListNode = function (value) {
  this.value = value;
  this.next = null;
};

var MyLinkedList = function () {
  this.count = 0;
  this.head = null;
};

/**
 * @param {number} index
 * @return {ListNode}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.count) {
    return null;
  }
  
  // 虚拟头节点法
  // let curr = new ListNode(0);
  // curr.next = this.head;
  // for (let i = 0; i <= index; i++) {  // 注意这里是i可以等于index
    // curr = curr.next;
  // }

  // 原链表法
  let curr = this.head;
  for (let i = 0; i < index; i++) { // 由于curr就是head了所以不用<=
    curr = curr.next;
  }
  
  return curr;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  const node = this.getNode(index);
  return node ? node.value : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  // const newNode = new ListNode(val);
  // newNode.next = this.head;
  // this.head = newNode;
  // this.count++;
  const node = new ListNode(val)
  if(this.count > 0){
    // 将 node 添加到 head 前面
    node.next = this.head
  }
  this.head = node
  this.count++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val)
  if (this.count === 0) {
    this.head = node
  } else {
    let curr = this.head
    while(curr.next != null){
      curr = curr.next
    }
    curr.next = node
  }
  this.count++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.count) {
    return;
  }
  
  if (index <= 0) {
    this.addAtHead(val);
  } else if (index === this.count) {
    this.addAtTail(val);
  } else {
    // 这种写法由于没有缓存prev.next，因此第3、4行顺序不能变
    // const prev = this.getNode(index - 1);
    // const newNode = new ListNode(val);
    // newNode.next = prev.next;
    // prev.next = newNode;
    // this.count++;

    // 思路：把prev的next指针指向新节点value。避免丢失下一个节点先定义临时变量存节点
    // 由于存了prev.next，因此第4、5行顺序改变也不影响结果
    const prev = this.getNode(index - 1)
    const next = prev.next
    const node = new ListNode(val)
    node.next = next
    prev.next = node

    this.count++
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // 1.对索引合法判断
  if(index < 0 || index >= this.count) {
    return
  }
  if (index === 0) {
    this.head = this.head.next
  } else {
    const prev = this.getNode(index - 1)
    prev.next = prev.next.next
  }
  this.count--
};
