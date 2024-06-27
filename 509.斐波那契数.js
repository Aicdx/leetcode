/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <=1) return n
    const dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1
    for(let i =2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
        console.log(dp)
    }
    return dp[n]
};
// @lc code=end

