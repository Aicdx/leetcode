/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // 要比对相邻值必须排序
    nums.sort((a,b)=>a-b);
    const resArr = []
    // 元素可重复需要数组set
    const usedArr = Array(nums.length).fill(false);
    const backTracking = (nums,route) =>{
        if(route.length === nums.length){
            resArr.push([...route])
            return
        }
        for(let i = 0;i<nums.length;i++){
            // 跳过相等值
            if(i>0 && nums[i] === nums[i-1] && !usedArr[i-1]) continue;
            if(!usedArr[i]){
                usedArr[i] = true;
                route.push(nums[i])
                backTracking(nums,route)
                route.pop()
                usedArr[i] = false
            }
        }
    }
    backTracking(nums,[])
    return resArr;
};
// @lc code=end

