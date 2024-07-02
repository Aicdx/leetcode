/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    // dp[j] 为最大可以装的数值
    // dp[j] = Math.max(dp[j],dp[j-stones[i]+stones[i]])
    const sum = stones.reduce((a,b)=>a+b)
    const bigSize = Math.floor(sum / 2);
    const dp = new Array(bigSize + 1).fill(0);
    for(let i =0;i<stones.length;i++){
        for(let j =bigSize;j>=stones[i];j--){
            dp[j] = Math.max(dp[j],dp[j-stones[i]]+stones[i])
        }
    }
    return sum - dp[bigSize] - dp[bigSize]
};
// @lc code=end

