/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let solw = 0,fast = 0;
    while(fast< nums.length){
        if(nums[fast] !== nums[fast -1]){
            nums[solw] = nums[fast]
            solw ++
        }
        fast ++ 
    }
    return solw
};
// @lc code=end

