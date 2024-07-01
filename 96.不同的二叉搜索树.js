/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 确定dp数组 1到i为节点组成的二叉搜索树的个数为dp[i]
    // 确定递推公式 dp[i] += dp[i-j] * dp[j] 
    // dp数组如何初始化 dp[0] = 1 d[1] = 1
    // 确定遍历顺序 
    // 举例推导dp数组 [1,1,2,5,14]
    const dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for(let i =2;i<=n;i++){
        for(let j = 1;j<=i;j++){
            dp[i] += dp[i-j] * dp[j-1] 
        }
    }
    console.log(dp)
    return dp[n]
};
// @lc code=end

