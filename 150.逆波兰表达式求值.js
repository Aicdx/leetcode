/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for(const i of tokens){
        let numI = Number(i)
        if(isNaN(numI)){
            const n2 = stack.pop()
            const n1 = stack.pop()
            switch(i){
                case '+':
                    stack.push(n1 + n2);
                    break;
                case '-':
                    stack.push(n1 - n2);
                    break;
                case '*':
                    stack.push(n1 * n2);
                    break;
                case '/':
                    stack.push(n1 / n2 | 0)
                    break;
            }
        }else{
            stack.push(numI)
        }
    }
    return stack[0]
};
// @lc code=end

