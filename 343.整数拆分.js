/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 确定dp数组 dp[i] 为 乘积
    // 确定递推公式 dp[i] = Math.max(dp[i],dp[i-j]*dp[j],(i-j)*i)
    // dp数组如何初始化 dp[0] = 0 dp[1] = 0 dp[2] = 1
    // 确定遍历顺序 
    // 举例推导dp数组 [0,0,1,2,4]
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1]= 0
    dp[2] = 1
    for(let i = 3;i<n+1;i++){
        for(let j = 1;j<=i/2;j++){
            dp[i] = Math.max(dp[i],dp[i-j]*j,(i-j)*j)
        }
    }
    return dp[n]
};
// @lc code=end

