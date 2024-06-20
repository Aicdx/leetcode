/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum = 0;
    for(let i =0;i<nums.length;i++){
        // 累加
        sum += nums[i]
        // 取最大值
        max = Math.max(sum,max);
        //当和小于0，从新开始累加
        if(sum<0) sum=0;
    }
    return max
};
// @lc code=end

