interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// 递归法
function preorderTraversal(root: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]) {
    if (node === null) return;
    res.push(node.value);
    traverse(node.left, res);
    traverse(node.right, res);
  }
  const res: number[] = [];
  traverse(root, res);
  return res;
}

// 迭代法

function preorderTraversal2(root: TreeNode | null): number[] {
  if (root === null) return [];
  let res: number[] = [];
  let helperStack: TreeNode[] = [];
  let curNode = root;
  helperStack.push(curNode);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    res.push(curNode.value);
    if (curNode.right !== null) helperStack.push(curNode.right);
    if (curNode.left !== null) helperStack.push(curNode.left);
  }
  return res;
}
