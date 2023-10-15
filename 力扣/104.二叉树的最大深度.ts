interface TreeNode {
  val: number,
  left: TreeNode | null,
  right: TreeNode | null
}
function maxDepth(root: TreeNode | null): number {
    if(root === null) return 0;
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    const height = 1 + Math.max(leftHeight,rightHeight);
    return height;
};