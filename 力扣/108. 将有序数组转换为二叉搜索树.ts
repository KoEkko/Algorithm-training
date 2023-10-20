function sortedArrayToBST(nums: number[]): TreeNode | null {
  function constructBST(nums:number[], left:number, right:number): TreeNode | null {
    if(left > right) return null;
    let mid = Math.floor((right - left) / 2) + left;
    const root = new TreeNode(nums[mid]);
    root.left = constructBST(nums, left, mid - 1);
    root.right = constructBST(nums, mid + 1, right);
    return root;
  };
  const left = 0;
  const right = nums.length - 1;
  return constructBST(nums,left, right);
};