/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const reslut = []
    for (let i of s){
        //如果当前值在栈顶出现，则重复，栈弹出(此时把栈顶重复元素也删除)
        if(i === reslut[reslut.length-1]){
            reslut.pop()
        }else{
            // 否则入栈
            reslut.push(i)
        }
    }
    return reslut.join('')
};
// @lc code=end

