function nextGreaterElements(nums:number[]):number[] {
  const length = nums.length;
  const stack:number[] = [];
  stack.push(0);
  const resArr: number[] = new Array(length).fill(-1);
  for(let i = 1; i < length * 2; i++) {
    const index = i % length;
    let top = stack[stack.length - 1];
    while(stack.length && nums[top] < nums[index]) {
      resArr[top] = nums[index];
      stack.pop();
      top = stack[stack.length - 1];
    }
    if(i < length) {
      stack.push(i);
    }
  }
  return resArr;
}