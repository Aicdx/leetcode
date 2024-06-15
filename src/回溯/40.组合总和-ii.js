/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // 普通解法，和组合总和1大体一致
    // candidates.sort((a,b)=>a-b);
    // const resArr = [];
    // const backTracking = (candidates,target,startIndex,sum,route)=>{
    //     if(sum > target) return ;
    //     if(sum===target){
    //         resArr.push([...route]);
    //         return;
    //     }
    //     for(let i =startIndex;i<candidates.length;i++){
    //         if(i>startIndex && candidates[i] === candidates[i-1]){
    //             continue;
    //         }
    //         let tempVal = candidates[i]
    //         route.push(tempVal)
    //         backTracking(candidates,target,i+1,sum+tempVal,route);
    //         route.pop()
    //     }
    // }
    // backTracking(candidates,target,0,0,[]);
    // return resArr

    // used数组解法
    candidates.sort((a,b)=>a-b);
    const resArr = [];
    const len = candidates.length;
    // used数组记录数字是否用过
    const used = new Array(len).fill(false);
    const backTracking = (candidates,target,startIndex,sum,route) =>{
        if(sum > target) return;
        // 收集结果
        if(sum === target){
            resArr.push([...route]);
            return;
        }
        for(let i = startIndex;i<len;i++){
            // 树层去重 [1,1,2,3] target = 4;
            // 此时 [1,1,2] [1,3] 结果符合条件
            // 目的是去重 [1,3] 当横向取数时如果 重复前一个1没有用过，则为横向变量，此时重复，跳过
            if(i>startIndex&& candidates[i] === candidates[i-1] && !used[i-1]){
                continue;
            }
            let tempVal = candidates[i]
            route.push(tempVal);
            used[i] = true;
            backTracking(candidates,target,i+1,sum+tempVal,route);
            route.pop()
            used[i] = false
        }
    }
    backTracking(candidates,target,0,0,[]);
    return resArr;
};
// @lc code=end

