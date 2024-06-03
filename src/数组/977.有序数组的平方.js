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
    //不改变原数组的方法，类似移动零，不能使用数据的unshift的时候使用
    // let n = nums.length;
    // const res = new Array(n).fill(0)
    // let l=0,r = n-1,slow = n-1;
    // while(l<=r){
    //     if(nums[l]*nums[l] < nums[r]*nums[r]){
    //         res[slow--] = nums[r]*nums[r]
    //         r --
    //     }else{
    //         res[slow--] = nums[l]*nums[l]
    //         l++
    //     }
    // }
    // return res
    //左右指针向中间靠拢，因为有序数组，平方后的最大值要么在左边要么在右边
    let l = 0,r=nums.length-1;
    let res = []
    while(l<=r){
        const rNum = nums[r]* nums[r]
        const lNum = nums[l]*nums[l]
        if(rNum> lNum){
            res.unshift(rNum)
            r --
        }else{
            res.unshift(lNum)
            l++
        }
    }
    return res
};
// @lc code=end

