function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if(root === null || root.val === p.val || root.val === q.val) return root;
  let left: TreeNode | null = null;
  let right: TreeNode | null = null;
  left = lowestCommonAncestor(root.left,p,q);
  right = lowestCommonAncestor(root.right,p,q);
  if(left !== null && right !== null) return root;
  if(left === null && right !== null) return right;
  else if(left !== null && right === null) return left;
  else return null; 
};