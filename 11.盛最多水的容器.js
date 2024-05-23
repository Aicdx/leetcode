/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //移动短线
    let left = 0,right = height.length-1
    let max = 0
    while(left<right){
        //短高为面积计算高
        const min = Math.min(height[left],height[right])
        max = Math.max(max,min*(right-left))
        if(height[left]>height[right]){
            right --
        }else{
            left ++
        }
    }
    return max
};
// @lc code=end

