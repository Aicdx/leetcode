/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return handleFunc(s) === handleFunc(t)
};
const handleFunc = function(str){
    let res = []
    for(let a of str){
        if(a === '#'){
            res.pop()
        }else{
            res.push(a)
        }
    }
    return res.join('')
}
// @lc code=end

