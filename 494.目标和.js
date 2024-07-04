/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a,b)=>a+b)
    if ((sum + target) % 2 || Math.abs(target) > sum)  return 0;
    const left = (sum+target)/2
     // 将问题转化为装满容量为left的背包有多少种方法
    // dp[i]表示装满容量为i的背包有多少种方法
    const dp = new Array(left+1).fill(0)
    // 装满容量为0的背包有1种方法（什么也不装）
    dp[0] = 1;
    for(let i=0;i<nums.length;i++){
        for(let j = left;j>=nums[i];j--){
            dp[j] += dp[j-nums[i]]
        }
    }
    return dp[left]
};
// @lc code=end

