/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    const len = intervals.length
    if(len === 0) return 0;
    intervals.sort((a,b)=>a[0]-b[0])
    let count = 0;
    let temp = intervals[0]
    let right = temp[1]
    for(let i=1;i<len;i++){
        temp = intervals[i]
        //有交集
        if(temp[0] < right){
            count++
            right = Math.min(right,temp[1])
        }else{
            right = temp[1]
        }
    }
    return count
};
// @lc code=end

