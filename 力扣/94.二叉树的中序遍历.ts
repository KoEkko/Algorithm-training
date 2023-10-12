interface TreeNode {
  value:number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function inorderTraversal(node: TreeNode | null):number[] {
  function traverse(node: TreeNode | null, res:number[]) {
    if(node === null ) return;
    traverse(node.left, res);
    res.push(node.value);
    traverse(node.right,res);
  }
  const res = [];
  traverse(node, res);
  return res;
}

function inorderTraversal2(root: TreeNode | null) :number[] {
  let helperStack :TreeNode[] = [];
  let res:number[]= [];
  if(root === null) return res;
  let curNode: TreeNode | null = root;
  while(curNode !== null || helperStack.length > 0) {
    if(curNode !==null) {
      helperStack.push(curNode);
      curNode = curNode.left
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.value);
      curNode = curNode.right;
    }
  }
  return res;
}