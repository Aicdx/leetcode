/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length === 1) return 0;
    //记录当前步数最大范围
    let curIndex = 0;
    let nextIndex = 0;
    let steps = 0;
    for(let i =0;i<nums.length-1;i++){
        // 记录最大覆盖范围
        nextIndex = Math.max(nextIndex,nums[i]+i)
        // 当I遍历到 上一步的最大覆盖范围，取覆盖范围中最大的
        // 步数++，此时覆盖范围更新
        if(i===curIndex){
            curIndex = nextIndex
            steps++
        }
    }
    return steps
};
// @lc code=end

