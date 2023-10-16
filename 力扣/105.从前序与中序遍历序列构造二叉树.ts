function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;
  const rootVal: number = preorder[0];
  const rootNode: TreeNode = new TreeNode(rootVal);
  const rootValIndex: number = inorder.indexOf(rootVal);
  rootNode.left = buildTree(preorder.slice(1, rootValIndex + 1), inorder.slice(0, rootValIndex));
  rootNode.right = buildTree(preorder.slice(rootValIndex + 1), inorder.slice(rootValIndex + 1));
  return rootNode;
};