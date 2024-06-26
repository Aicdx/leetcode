/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const len = intervals.length
    if(len <=1) return intervals
    intervals.sort((a,b)=>a[0]-b[0])
    let temp = intervals[0]
    // 定义区间边界
    let left = temp[0],right = temp[1]
    let resArr= []
    for(let i =1;i<len;i++){
        temp = intervals[i]
        //如果当前区间左边界大于上个区间的右边界
        if(temp[0] > right){
            resArr.push([left,right])
            //更新下一个区间
            left = temp[0]
            right = temp[1]
        }else{
            right = Math.max(right,temp[1])
        }
    }
    //遍历到最区间没有进入结果集，需补充
    resArr.push([left,right])
    return resArr
};
// @lc code=end

