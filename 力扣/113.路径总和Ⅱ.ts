function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  function recur(node: TreeNode, sum: number, route: number[]) {
    if (node.left === null && node.right === null && sum === 0)
      resArr.push([...route]);
    if (node.left !== null) {
      route.push(node.left.val);
      recur(node.left, sum - node.left.val, route);
      route.pop();
    }
    if (node.right !== null) {
      route.push(node.right.val);
      recur(node.right, sum - node.right.val, route);
      route.pop();
    }
  }
  let tempArr: number[] = [];
  let resArr: number[][] = [];
  if (root === null) return resArr;
  tempArr.push(root.val);
  recur(root, targetSum - root.val, tempArr);
  return resArr;
}
