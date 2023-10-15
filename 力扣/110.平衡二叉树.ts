import { TreeNode } from './../../../算法/data-structures-and-algorithms-Ts/BSTree/BSTree';
function isBalanced(root: TreeNode<number> | null):boolean {
  function getHeight(root:TreeNode<number> | null):number {
    if(root === null) return 0;
    let leftHeight = getHeight(root.left);
    if(leftHeight === -1) return -1;
    let rightHeight = getHeight(root.right);
    if(rightHeight === -1) return -1;
    let res = 0;
    if(Math.abs(leftHeight - rightHeight) > 1) res = -1;
    else res = 1 + Math.max(leftHeight, rightHeight);
    return res;
  }
  return getHeight(root) !== -1;
}
