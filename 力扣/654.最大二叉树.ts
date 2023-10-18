function constructMaximumBinaryTree(nums:number[]): TreeNode | null {
  if(nums.length === 0) return null;
  let maxIndex: number = 0;
  let maxVal: number = nums[0];
  for(let i = 1, length = nums.length; i < length ; i++) {
    if(nums[i] > maxVal) {
      maxIndex = i;
      maxVal = nums[i]
    }
  }
  const rootNode: TreeNode = new TreeNode(maxVal);
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return rootNode;
}