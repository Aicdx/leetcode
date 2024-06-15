/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const resArr = []
    const backTracking = (n,k,startIndex,sum,route)=>{
        // 剪枝，当超过n跳过
        if(sum>n) return;
        // 收集结果
        if(sum === n && route.length === k){
            resArr.push([...route])
            return;
        }
        for(let i = startIndex;i<=9;i++){
            sum += i;
            route.push(i)
            backTracking(n,k,i+1,sum,route);
            route.pop()
            sum -= i
        }
    }
    backTracking(n,k,1,0,[])
    return resArr
};

// @lc code=end

