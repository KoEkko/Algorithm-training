import { TreeNode } from './../../../算法/data-structures-and-algorithms-Ts/BSTree/BSTree';

function countNodes(root: TreeNode<number> | null): number {
  if(root === null ) return 0;
  let left: TreeNode<number> | null = root;
  let right: TreeNode<number> | null = root;
  let leftDepth = 0, rightDepth = 0;
  while(left) {
    leftDepth++;
    left = left.left;
  }
  while(right) {
    rightDepth++;
    right = right.right;
  }
  if(leftDepth === rightDepth) return 2 ** leftDepth - 1;
  let leftNumber = countNodes(root.left);
  let rightNumber = countNodes(root.right);
  return 1 + leftNumber + rightNumber;
}