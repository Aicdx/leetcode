/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 思路：每跳一步，更新这步内的覆盖范围
    // [2,3,1,1,4]
    // step = 2  覆盖范围 为 [3,1]
    // step = 3 || step =1  覆盖范围为 [1,1,4] 满足
    // [3,2,1,0,4]
    // step = 3 覆盖范围为 [2,1,0]
    // step = 2 覆盖为 [1,0]|| step = 1 覆盖为[0]||step = 0
    if(nums.length === 1) return true;
    let cover = 0
    for(let i =0;i<=cover;i++){
        cover = Math.max(cover,i+nums[i]);
        if(cover >= nums.length-1) return true;
    }
    return false
};
// @lc code=end

