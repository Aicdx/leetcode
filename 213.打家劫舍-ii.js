/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 如果偷第一个，则不能偷最后一个 0 - len-2
    // 如果不偷第一个，则能偷最后一个 1 - len-1
    // 比较两种结果最大的
    const len = nums.length
    if (len === 0) return 0;
    if (len === 1) return nums[0];

    const res1 = robVal(nums,0,len-2)
    const res2 = robVal(nums,1,len-1)
    return Math.max(res1,res2)
};
const robVal = (nums,start,end)=>{
    if (end === start) return nums[start]
    const dp = Array(end).fill(0)
    dp[start] = nums[start]
    dp[start+1] = Math.max(nums[start+1],nums[start])
    for(let i = start+2;i<=end;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[end]
}
// @lc code=end

