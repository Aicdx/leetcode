/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    const stack = []
    for(let x of s){
        if(map[x]){
            stack.push(x)
            continue;
        }
        if(map[stack.pop()] !==x){
            return false
        }
    }
    return !stack.length
};
// @lc code=end

