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
    let res = []
    let path = []
    let sum = 0
    const dfs = (path,index) =>{
        if(sum > n){
            return
        }
        if(path.length === k){
            if(sum===n){
                res.push([...path])
                return
            }
        }
        for(let i = index;i<=9 - (k-path.length-1);i++){
            path.push(i)
            sum = sum+i
            index +=1
            dfs(path,index)
            sum -= i
            path.pop()
        }
    }
    dfs(path,1)
    return res
};
// @lc code=end

