/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const len = nums.length;
    const res = [];
    // 单调队列，存储当前滑动窗口最大值索引
    const deque = []
    for (let i = 0;i<len;i++){
        //维护队列最大值，如果队尾小于当期值，出栈
        /*
        --------
        头 => 尾
        --------
        因为用数组模拟，所以队尾是
        */
        while(deque.length && nums[deque[deque.length -1]]<= nums[i]){
            deque.pop()
        }
        // 入队索引
        deque.push(i)
        // 当队头移动至窗口外，出队列
        while(deque.length && deque[0] <= i-k){
            deque.shift()
        }
        if(i >= k - 1){
            res.push(nums[deque[0]])
        }
    }
    return res
};
// @lc code=end

