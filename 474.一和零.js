/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = Array.from(Array(m+1), () => Array(n+1).fill(0));
    for(let str of strs){
        let zero = 0
        let one = 0

        for(let num of str){
            if(num === '0'){
                zero++
            }else{
                one++
            }
        }

        for(let i = m;i>=zero;i--){//0的容量
            for(let j=n;j>=one;j--){//1的容量
                dp[i][j] = Math.max(dp[i][j],dp[i-zero][j-one]+1)
            }
        }
    }
    return dp[m][n];
};
// @lc code=end

