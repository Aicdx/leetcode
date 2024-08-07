/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 贪心，只要前者比后者小，买入
    // let count = 0
    // for(let i=1;i<prices.length;i++){
    //     if(prices[i]>prices[i-1]){
    //         count += prices[i]-prices[i-1]
    //     }
    // }
    // return count
    // 动态规划   
    // dp[i][0] 表示第i天持有股票所得现金。
    // dp[i][1] 表示第i天不持有股票所得最多现金dp[i][]
    // dp[i][0] = Math.max(dp[i-1][0],dp[i-1]-prices[i])
    // dp[i][1] = Math.max(dp[i-1][1],dp[i-1]+prices[i])
    let dp = Array.from(Array(prices.length), () => Array(2).fill(0));
    dp[0][0] = 0 -prices[0]
    dp[0][1] = 0
    for(let i =1;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]-prices[i])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
    }
    return dp[prices.length-1][1]
};
// @lc code=end

