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
    let start=0,end=0,sum=0;
    let max = Infinity;
    let len = nums.length;
    while(end < len){
        sum += nums[end]
        while(sum>=target){
            max = Math.min(max,end-start+1)
            sum -= nums[start]
            start++
        }
        end++
    }
    return max===Infinity?0:max
};
// @lc code=end

