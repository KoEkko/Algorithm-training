function convertBST(root: TreeNode | null): TreeNode | null {
  let pre:number = 0;
  function recur(root:TreeNode | null) {
    if(root === null) return;
    recur(root.right);
    root.val += pre;
    pre = root.val;
    recur(root.left);
  }
  recur(root);
  return root;
};