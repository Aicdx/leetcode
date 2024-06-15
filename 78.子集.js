/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const resArr = [];
    const backTracking = (nums,startIndex,route)=>{
        //子集问题收集所有节点
        resArr.push([...route])
        let len = nums.length;
        if(startIndex === len) return;
        for(let i = startIndex;i<len;i++){
            route.push(nums[i])
            backTracking(nums,i+1,route)
            route.pop()
        }
    }
    backTracking(nums,0,[])
    return resArr
};
// @lc code=end

