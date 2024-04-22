/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
// 双指针+遍历 超时算法但思路清晰 O(kn)
// function maxSlidingWindow(nums: number[], k: number): number[] {
//     const len = nums.length
//     const res: number[] = []
//     let left = 0
//     let right = k-1
//     while(right < len){
//         const max = calMax(nums,left,right) as number
//         res.push(max);
//         left ++
//         right++
//     }
//     return res
// };
// function calMax(arr: number[],left: number,right: number): number {
//     let maxNum = arr[left]
//     for(let i=left;i<=right;i++){
//         if(arr[i]> maxNum){
//             maxNum = arr[i]
//         }
//     }
//     return maxNum
// }
// 思路分析：双端队列法 O(n)
function maxSlidingWindow(nums: number[], k: number): number[] {
  const len: number = nums.length;
  const res: number[] = [];
  const deque: number[] = [];
  for (let i = 0; i < len; i++) {
    //当队尾小于当前元素，将队尾元素（索引）不断出队，直至队尾元素大于等于当前元素
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    // 入队当前元素索引（注意是索引）
    deque.push(i);
    // 当队头元素的索引已经被排除在滑动窗口之外时 将队头元素索引出队
    // [ 0 ]
    // [ 1 ]
    // [ 1, 2 ]
    // [ 1, 2, 3 ]
    // [ 4 ]
    // [ 4, 5 ]
    // [ 6 ]
    // [ 7 ]
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }
    // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
    console.log(deque);
  }
  return res;
}
// @lc code=end
