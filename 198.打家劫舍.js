/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // dp[i] i为第i间屋子 dp[i]为最大金额
    // dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    // dp[0] = nums[0] dp[1] = Math.max(nums[0],nums[1])
    if(nums.length===0){
        return 0
    }
    if(nums.length===1){
        return nums[0]
    }
    let dp = Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
};
// @lc code=end

