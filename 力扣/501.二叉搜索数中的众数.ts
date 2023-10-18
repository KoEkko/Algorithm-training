function findMode(root:TreeNode | null): number[] {
  function recur(node:TreeNode | null) {
    if(node === null) return null;
    recur(node.left);
    if(preNode === null) {
      count = 1;
    } else if(preNode.val === node.val) {
      count++;
    } else {
      count = 1;
    }
    if(count === maxCount) {
      result.push(node.val);
    } else if(count > maxCount) {
      maxCount = count;
      result.length = 0;
      result.push(node.val);
    }
    preNode = node;
    recur(node.right);
  }
  const result:number[] = [];
  if(root === null) return result;
  let count = 0;
  let maxCount = 0;
  let preNode: TreeNode | null = null;
  recur(root);
  return result;
}