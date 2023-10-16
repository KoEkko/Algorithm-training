function findBottomLeftValue(root:TreeNode | null) :number {
  function recur(root: TreeNode, depth: number):void {
    if(root.left === null && root.right === null) {
      if(depth > maxDepth) {
        maxDepth = depth;
        result = root.val;
      }
      return;
    }
    if(root.left !== null) recur(root.left, depth + 1);
    if(root.right !== null) recur(root.right, depth + 1);
  }
  let maxDepth = 0;
  let result = 0;
  if(root === null) return result;
  recur(root, 1);
  return result;
}