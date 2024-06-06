/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    // 记录前两数之和出现的次数
    const towSumMap = new Map()
    //记录出现之和
    let count = 0;
    for(let n1 of nums1){
        for(let n2 of nums2){
            const sum = n1 + n2
            // 记录n1 + n2
            towSumMap.set(sum, (towSumMap.get(sum) || 0) +1)
        }
    }
    for(let n3 of nums3){
        for(let n4 of nums4){
            const sum = n3 + n4
            // 如果 存在 0 - n3 -n4 ，则为所需结果
            count += towSumMap.get(0-sum) || 0
        }
    }
    return count
};
// @lc code=end

