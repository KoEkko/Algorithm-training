function buildTree(inorder: number[], postorder:number[]): TreeNode | null {
  if(postorder.length === 0) return 0;
  const rootVal: number = postorder.pop()!;
  const rootIndex: number = postorder.indexOf(rootVal);
  const rootNode:TreeNode = new TreeNode(rootVal);
  rootNode.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0,rootIndex));
  rootNode.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex));
  return rootNode;
}