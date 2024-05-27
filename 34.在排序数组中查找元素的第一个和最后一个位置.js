/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const leftBorder = searchLeft(nums, target)
    const rightBorder = searchRight(nums, target)
    if (leftBorder === -2 || rightBorder === -2) return [-1,-1]
    if(rightBorder - leftBorder > 1){
        return [leftBorder+1,rightBorder-1]
    }
    return [-1,-1]

};
const searchLeft = function(nums, target){
    let left = 0,
    right = nums.length -1,
    leftBorder = -2;
    while(left <= right){
        const mid = Math.floor((right -left)/2) + left
        if(nums[mid] >= target){
            right = mid -1
            leftBorder = right
        }else{
            left = mid + 1
        }
    }
    return leftBorder
}
const searchRight = function(nums,target){
    let left = 0,
    right = nums.length - 1,
    rightBorder = -2;
    while(left <= right){
        const mid = Math.floor((right-left)/2) + left;
        if(nums[mid] <= target){
            left = mid +1
            rightBorder = left
        }else{
            right = mid -1
        }
    }
    return rightBorder
}
// @lc code=end

