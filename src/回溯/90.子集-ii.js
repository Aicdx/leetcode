/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b);
    const resArr = []
    const backTracking = (nums,startIndex,route) =>{
        resArr.push([...route]);
        const len = nums.length;
        if(startIndex === len) return;
        for(let i = startIndex;i<len;i++){
            // 排序后去重
            if(i>startIndex && nums[i] === nums[i-1]) continue;
            route.push(nums[i])
            backTracking(nums,i+1,route);
            route.pop()
        }
    }
    backTracking(nums,0,[])
    return resArr;
};
// @lc code=end

