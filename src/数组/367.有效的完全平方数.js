/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true
    let left=0,right = num-1
    while(left<=right){
        const mid = Math.floor((right-left)/2)+left
        if(mid*mid> num){
            right = mid -1
        }else if(mid*mid<num){
            left = mid +1
        }else{
            return true
        }
    }
    return false
};
// @lc code=end

