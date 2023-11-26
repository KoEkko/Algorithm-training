function rob(root: TreeNode | null): number {
  return Math.max(...robNode(root));
}
type MaxValueArr = [number, number];
function robNode(node: TreeNode | null): MaxValueArr {
  if (node === null) return [0, 0];

  const left = robNode(node.left);
  const right = robNode(node.right);
  // 不偷
  const val1 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  // 偷
  const val2 = node.val + +left[0] + right[0];
  return [val2, val1];
}
