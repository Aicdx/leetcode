/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 确定dp数组（dp table）以及下标的含义 dp[i][j] 到达这步的步数
    // 确定递推公式 dp[i][j] = dp[i-1][j] + dp[i][j-1]
    // dp数组如何初始化 dp[i][0] = 1 dp[0][j] = 1
    // 确定遍历顺序 
    // 举例推导dp数组
    let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    // for(let i = 0;i<m;i++) dp[i][0] = 1
    // for(let i = 0;i<n;i++) dp[0][i] = 1
    for(let i = 1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
// @lc code=end

