interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function isSymmetric(root: TreeNode | null): boolean {
  function recur(
    leftNode: TreeNode | null,
    rightNode: TreeNode | null
  ): boolean {
    if (leftNode === null && rightNode === null) return true;
    if(leftNode === null || rightNode === null) return false;
    if (leftNode!.val !== rightNode!.val) return false;
    let isSym1: boolean = recur(leftNode!.left, rightNode!.right);
    let isSym2: boolean = recur(leftNode!.right, rightNode!.left);
    return isSym1 && isSym2;
  }
  if (root === null) return true;
  return recur(root.left,root.right);
}
