/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res = []
    let left = 0,right = nums.length -1;
    while(left<=right){
        const leftNum = nums[left] * nums[left]
        const rightNum = nums[right] * nums[right]
        if (leftNum > rightNum){
            res.unshift(leftNum)
            left ++
        }else{
            res.unshift(rightNum)
            right --
        }
    }
    return res
};
// @lc code=end

