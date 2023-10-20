function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let left:TreeNode | null = null;
  let right: TreeNode | null = null;
  if(root === null) return null;
  if(root.val > p.val && root.val > q.val) {
    left =  lowestCommonAncestor(root.left, p,q);
    if(left) return left;
  }
  if(root.val < p.val && root.val < q.val) {
    right = lowestCommonAncestor(root.right, p,q);
    if(right) return right;
  }
  return root;
};