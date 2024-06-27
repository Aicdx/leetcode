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
    if(nums1.length > nums2.length){
        let _ = nums1
        nums1 = nums2
        nums2 = _
    }
    // 此时n1为短
    const resSet = new Set()
    // 记录长数组一共出现的数字
    const numSet = new Set(nums2)
    for(let i=0;i<nums1.length;i++){
        if(numSet.has(nums1[i])){
            resSet.add(nums1[i])
        }
    }
    return Array.from(resSet)
};
// @lc code=end

