interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function postorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]) {
    if (node === null) return;
    traverse(node.left, res);
    traverse(node.right, res);
    res.push(node.value);
  }
  const res = [];
  traverse(node, res);
  return res;
}



function postorderTraversal2(root:TreeNode | null) :number[] {
  let helperStack: TreeNode[] = [];
  const res:number[] = [];
  if(root === null) return res;
  let curNode: TreeNode | null = root;
  helperStack.push(curNode);
  while(helperStack.length > 0) {
    curNode = helperStack.pop()!;
    res.push(curNode.value);
    if(curNode.left !== null) helperStack.push(curNode.left);
    if(curNode.right !== null) helperStack.push(curNode.right);
  } 
  return res.reverse();
}