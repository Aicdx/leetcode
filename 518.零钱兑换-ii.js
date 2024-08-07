/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array(amount+1).fill(0)
    dp[0] = 1
    // 如果求组合数就是外层for循环遍历物品，内层for遍历背包。
    // 如果求排列数就是外层for遍历背包，内层for循环遍历物品
    for(let i = 0;i<coins.length;i++){
        for(let j = coins[i];j<=amount;j++){
            dp[j] += dp[j-coins[i]]
        }
    }
    return dp[amount]
};
// @lc code=end

