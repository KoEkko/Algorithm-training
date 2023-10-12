function maxSlidingWindow(nums: number[], k: number): number[] {
  class MonoQueue {
    private queue: number[];
    constructor() {
      this.queue = [];
    }
    enqueue(value: number) {
      let back: number | undefined = this.queue[this.queue.length - 1];
      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }
    dequeue(value: number) {
      let top: number | undefined = this.top()!;
      if (top !== undefined && top === value) {
        this.queue.shift();
      }
    }
    top(): number | undefined {
      return this.queue[0];
    }
  }
  const helperQueue: MonoQueue = new MonoQueue();
  const resArr: number[] = [];
  let i = 0,
    j = 0;
  while (j < k) {
    helperQueue.enqueue(nums[j++]);
  }
  resArr.push(helperQueue.top()!)
  while(j < nums.length) {
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);
    resArr.push(helperQueue.top()!);
    j++, i++;
  }
  return resArr;
}
