/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x
    let left = 0,right = x - 1
    while(left<=right){
        const mid = Math.floor((right-left)/2)+left
        if(mid * mid > x){
            right = mid -1
        }else if(mid*mid < x){
            left = mid + 1
        }else{
            return mid
        }
    }
    return right
};
// @lc code=end

