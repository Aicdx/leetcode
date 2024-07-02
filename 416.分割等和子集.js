/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 寻找sum/2的子集，如果能找到则符合题意
    // 确定dp数组 dp[j] j表示背包容量, dp[j] 表示背包最大重量
    // 确定递推公式 dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])
    // dp数组如何初始化 填充0
    // 确定遍历顺序 

    const sum = nums.reduce((pre, cur) => pre + cur);
    if (sum % 2 === 1) return false;
    const bagSize = sum / 2;
    const goodsNum = nums.length;
    const dp = new Array(bagSize + 1).fill(0);
    for(let i=0;i<goodsNum;i++){
        for(let j =bagSize;j>=nums[i];j--){
            dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])
        }
    }
    return dp[bagSize] === bagSize
};
// @lc code=end

