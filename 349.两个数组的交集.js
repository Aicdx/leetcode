/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length<nums2.length){
        let _ = nums1;
        nums1 = nums2
        nums2 = _;
    }
    const numSet = new Set(nums1)
    const resSet = new Set()
    for(let i =0;i<nums2.length;i++){
        if(numSet.has(nums2[i])){
            resSet.add(nums2[i])
        }
    }
    return Array.from(resSet)
};
// @lc code=end

