import { TreeNode } from "./../../../算法/data-structures-and-algorithms-Ts/BSTree/BSTree";
function minDepth(root: TreeNode<number> | null): number {
  if (root === null) return 0;
  let leftDepth = minDepth(root.left);
  let rightDepth = minDepth(root.right);
  if (root.left === null && root.right !== null) return 1 + rightDepth;
  if (root.right === null && root.left !== null) return 1 + leftDepth;
  const result = 1 + Math.min(leftDepth, rightDepth);
  return result;
}
