/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
   const resArr = []
   const backTracking = (nums,startIndex,route)=>{
        if(route.length >=2){
            resArr.push([...route]);
        }
        let len = nums.length;
        const usedSet = new Set()
        for(let i = startIndex;i<len;i++){
            // 当不是递减或者重复
            if(nums[i]<route[route.length-1] || usedSet.has(nums[i])){
                continue
            }
            usedSet.add(nums[i])
            route.push(nums[i]);
            backTracking(nums,i+1,route);
            route.pop()
        }
   }
   backTracking(nums,0,[]);
   return resArr
};
// @lc code=end

