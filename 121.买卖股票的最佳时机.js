/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    if(!len) return 0;
    const dp = []
    // 记录一次交易，一次交易有买入卖出两种状态
    // 0代表持有，1代表卖出
    dp[0] = [-prices[0],0]
    for(let i=1;i<len;i++){
        // dp[i][0]代表第i天持有股票的最大收益
        // dp[i][1]代表第i天不持有股票的最大收益
        dp[i] = [
            Math.max(dp[i-1][0],-prices[i]),
            Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
        ]
    }
    return dp[len-1][1]
};
// @lc code=end

