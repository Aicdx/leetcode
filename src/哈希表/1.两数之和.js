/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {}
    for(let i=0;i<nums.length;i++){
        //当哈希表存在差值，返回
        if(hash[target - nums[i]] !== undefined){
            return [i,hash[target - nums[i]]]
        }
        // 记录下标
        hash[nums[i]] = i
    }
    return []
};
// @lc code=end

