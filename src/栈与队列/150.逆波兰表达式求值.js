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
        let numI = Number(i);
        if(!isNaN(numI)){
        //遇到数字入栈
            stack.push(numI)
        }else{
            //遇到运算符运算
            // 靠近运算法的为n2
            const n2 = stack.pop()
            const n1 = stack.pop()
            // 运算结果入栈
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
                    stack.push(n1 / n2 | 0);
                    break;
            }
        }
    }
    return stack.pop()
};
// @lc code=end

