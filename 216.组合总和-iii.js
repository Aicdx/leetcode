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
    //结果集
    let res = []
    // 递归
    const dfs = (n,k,index,tempArr,sum) =>{
        // 剪枝
        if(sum > n){
            return
        }
        if(tempArr.length === k){
            if(sum===n){
                // 收集结果
                res.push([...tempArr])
                return
            }
        }
        for(let i = index;i<=9 - (k-tempArr.length-1);i++){
            tempArr.push(i)
            sum = sum+i
            index +=1
            dfs(n,k,index,tempArr,sum)
            sum -= i
            tempArr.pop()
        }
    }
    dfs(n,k,1,[],0)
    return res
};

// @lc code=end

