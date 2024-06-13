/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // 结果集
    const resArr = [];
    // 定义回溯函数 因为可以重复，每一轮结果都是从candidates中收集
    // 定义curIndex，每一轮从左往右减少 [123] [23] [3]
    const backTracking = (candidates, target,curIndex,route,sum)=>{
        // 当合超过目标
        if(sum > target) return;
        // 收集结果
        if(sum === target){
            resArr.push([...route]);
            return;
        }
        for(let i=curIndex;i<candidates.length;i++){
            let tempVal = candidates[i];
            route.push(tempVal);
            backTracking(candidates, target,i,route,sum+tempVal);
            route.pop()
        }
    }
    backTracking(candidates, target,0,[],0)
    return resArr;
};
// @lc code=end

