/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    //转成数组操作
    let numArr = n.toString().split('').map(i=>parseInt(i))
    const len = numArr.length
    // 标识是否要变成9（因为求最大）
    let flag = len
    for(let i =len -2;i>=0;i--){
        // 遇到上一位比下一位大，借位(下一位借位变成9)
        if(numArr[i] > numArr[i+1]){
            numArr[i] -= 1
            flag = i + 1
        }
    }
    for(let i = flag;i<len;i++){
        numArr[i] = 9
    }
    return parseInt(numArr.join(''))
};
// @lc code=end

