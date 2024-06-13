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
        // 遇到左括号入栈
        if(map[x]){
            stack.push(x)
            continue;
        }
        // 右括号判断是否与栈顶相等
        if(map[stack.pop()] !==x){
            return false
        }
    }
    return !stack.length
};
// @lc code=end

