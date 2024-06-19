/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const resArr = []
    const usedSet = new Set()
    const backTracking = (nums,route) => {
        if(nums.length === route.length){
            resArr.push([...route])
            return;
        }
        for(let i = 0;i<nums.length;i++){
            let tempVal = nums[i]
            //树深去重
            if(!usedSet.has(tempVal)){
                usedSet.add(tempVal)
                route.push(tempVal)
                backTracking(nums,route)
                route.pop()
                usedSet.delete(tempVal)
            }
        }
    }
    backTracking(nums,[])
    return resArr
};
// @lc code=end

