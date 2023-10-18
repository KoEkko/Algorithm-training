function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root === null || root.val === val) return root;
  let result: TreeNode | null = null;
  if(val < root.val) result = searchBST(root.left, val);
  if(val > root.val) result = searchBST(root.right, val);
  return result;
}