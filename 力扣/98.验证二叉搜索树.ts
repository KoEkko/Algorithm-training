function isValidBst(root: TreeNode | null): boolean {
  let maxVal = -Infinity;
  function inorderTraverse(root: TreeNode | null):boolean {
    if(root === null) return true;
    let isLeft:boolean = inorderTraverse(root.left);
    if(!isLeft) return false;
    if(maxVal < root.val) {
      maxVal = root.val;
    } else {
      return false;
    }
    let isRight:boolean = inorderTraverse(root.right);
    return isLeft && isRight;
  }
  return inorderTraverse(root);
}