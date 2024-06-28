/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 确定dp数组（dp table）以及下标的含义 dp[i][j] 到达这步的步数
    // 确定递推公式 dp[i][j] = dp[i-1][j] + dp[i][j-1]
    // dp数组如何初始化 dp[i][0] = 1 dp[0][j] = 1
    // 确定遍历顺序 
    // 举例推导dp数组
    const  m = obstacleGrid.length,n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i =0;i<m && obstacleGrid[i][0] ===0;i++){
        dp[i][0] = 1
    }
    for(let i =0;i<n && obstacleGrid[0][i] ===0;i++){
        dp[0][i] = 1
    }
    for(let i =1;i<m;i++){
        for(let j =1;j<n;j++){
            //遇到障碍物跳过
            if(obstacleGrid[i][j] === 1) continue;
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
// @lc code=end

