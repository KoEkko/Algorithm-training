function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function recur(root: TreeNode, sum: number): boolean {
    if (root.left === null && root.right === null && sum === 0) return true;
    if(root.left !== null ) {
      if(recur(root.left, sum - root.left.val)) return true;
    }
    if(root.right !== null ) {
      if(recur(root.right, sum - root.right.val)) return true;
    }
    return false;
  }
  if (root === null) return false;
  return recur(root, targetSum - root.val);
}
