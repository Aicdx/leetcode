/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // 绝对值倒序排序,这样处理完的数组如果K没完，
    // 则是倒序的全正数，最后一个为最小值
    nums.sort((a,b)=> Math.abs(b) - Math.abs(a))
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0 && k>0){
            nums[i] = -nums[i]
            k--
        }
    }
    // 直接最后一个数反复取反
    while(k--){
        nums[nums.length-1] = -nums[nums.length-1]
    }
    return nums.reduce((a,b)=>a+b)
};

// @lc code=end

