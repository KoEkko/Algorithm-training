import { TreeNode } from './../../../算法/data-structures-and-algorithms-Ts/BSTree/BSTree';
function getMinimumDifference(root: TreeNode | null):number {
  function recur(root: TreeNode | null) {
    if(root === null) return null;
    recur(root.left);
    if(pre !== null) {
      result = Math.min(result, root.val - pre.val);
    }
    pre = root;
    recur(root.right);
  }
  let result:number = Infinity;
  let pre: TreeNode | null = null;
  recur(root);
  return result;
}