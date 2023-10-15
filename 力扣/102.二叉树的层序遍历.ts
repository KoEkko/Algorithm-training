interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function levelOrder(root: TreeNode | null): number[][] {
  let tempArr: number[] = [];
  let helperQueue: TreeNode[] = [];
  const resArr: number[][] = [];
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      const curNode = helperQueue.shift()!;
      tempArr.push(curNode.value);
      if(curNode.left !== null) {
        helperQueue.push(curNode.left)
      } 
      if(curNode.right !== null) {
        helperQueue.push(curNode.right)
      }
    }
    resArr.push(tempArr)
    tempArr = []
  }
  return resArr;
}
