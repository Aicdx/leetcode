/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    //滑动窗口
    let left = right = sum = 0;
    // 取无穷大为初始值，比较取较小值
    let mid = Infinity;
    while(right <= nums.length){
        // 统计从左到右累加是否大于target
        sum += nums[right]
        while(sum >= target){
            // 滑动左指针收窄
            mid = Math.min(mid,right-left+1)
            sum -= nums[left]
            left++
        }
        right ++
    }
    return mid === Infinity?0:mid
};
// @lc code=end

