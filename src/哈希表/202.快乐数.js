/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set()
    //如果在set中出现过，不是快乐数
    while(n!==1 && !set.has(n)){
        set.add(n)
        n = getSum(n)
    }
    return n===1
};
// 取各个位数平方和
const getSum = function(n){
    let sum = 0
    while(n){
        // 个位数平方
        sum += (n%10) ** 2
        // 去除个位数
        n = Math.floor(n/10)
    }
    return sum
}
// @lc code=end

