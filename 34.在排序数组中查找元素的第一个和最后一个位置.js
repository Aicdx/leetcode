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
    let leftBorder = getLeftBorder(nums, target)
    let rightBorder = getRightBorder(nums, target)
    // 如果没有找到边界
    if(leftBorder === -2 || rightBorder === -2) {
        return [-1,-1]
    }
    //如果有找到有效边界，并且至少有一个目标在内
    if (rightBorder - leftBorder > 1){
        return [leftBorder + 1,rightBorder -1]
    }
    return [-1,-1]
};
const getLeftBorder = function (nums, target){
    let left = 0
    let right = nums.length - 1
    let leftBorder = -2
    while(left <= right){
        const mid = Math.floor((right-left)/2) + left
        if(nums[mid] >= target){
            right = mid -1
            leftBorder = right
        }else{
            left= mid + 1
        }
    }
    return leftBorder
}
const getRightBorder = function (nums, target){
    let left = 0
    let right = nums.length - 1
    let rightBorder = -2
    while(left <= right){
        const mid = Math.floor((right-left)/2) + left
        if(nums[mid] > target){
            right = mid -1
        }else{
            left= mid + 1
            rightBorder = left

        }
    }
    return rightBorder
}
// @lc code=end

