/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return []
    // 定义映射表
    const strMap = {
        1:'',
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    const resArr = []
    // 回溯函数 digits数字字符串，当前遍历位置 路径表（）
    const backTracking = (digits,startIndex,route)=>{
        // 收集结果
        if(startIndex === digits.length){
            resArr.push(route.join(''))
            return;
        }
        // 获取数字对应字母串
        let tempArr = strMap[digits[startIndex]];
        for(let i=0;i<tempArr.length;i++){
            // 加入当前字母
            route.push(tempArr[i])
            backTracking(digits,startIndex+1,route);
            // 回溯
            route.pop()
        }
    }
    backTracking(digits,0,[])
    return resArr;
};
// @lc code=end

