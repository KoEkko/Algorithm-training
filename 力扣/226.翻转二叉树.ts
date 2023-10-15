interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  let tempNode: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tempNode;
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
}
