/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length;
    const candies = new Array(len).fill(1)
    // 从左往右比较，右边比左边的多一个糖果
    for(let i =1;i<len;i++){
        if(ratings[i] > ratings[i-1]){
            candies[i] = candies[i-1] +1
        }
    }
    // 从右往左 左比右多一个并和第一次循环做比较取最大值
    for(let i = len -2;i>=0;i--){
        if(ratings[i] > ratings[i+1]){
            candies[i] = Math.max(candies[i],candies[i+1]+1)
        }
    }
    return candies.reduce((a,b)=>a+b)
};
// @lc code=end

