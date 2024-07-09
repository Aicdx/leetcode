/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const len = points.length;
    if(len === 0) return 0;
    points.sort((a,b)=>a[0]-b[0])
    let count = 1
    let temp = points[0]
    let right = temp[1]
    for(let i=1;i<len;i++){
        temp = points[i]
        //不在区间内
        if(temp[0] > right){
            count++;
            right = temp[1]
        }else{
            // 更新右边界
            right = Math.min(right,temp[1])
        }
    }
    return count
};
// @lc code=end

