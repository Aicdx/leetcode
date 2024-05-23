/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0
    }
    nums = nums.sort((a,b)=>a-b)
    let max = 1
    let count = 1
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i+1]) continue
        if(nums[i]+1 === nums[i+1]){
            count ++
        }else{
            count = 1
        }
        max = Math.max(max,count)
    }
    return max
};
// @lc code=end

