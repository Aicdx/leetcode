/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    //结果集
    let reslut = []
    // 回溯算法
    const backTracking = function(n,k,startIndex,tempArr){
        // 收集结果
        if(tempArr.length === k){
            reslut.push([...tempArr])
            return
        }
        // 例 n=4，k=2
        // k元素个数，tempArr当前进栈
        // 剪枝操作，从 n -(k - tempArr.length-1)剩余所需个数
        // 4 - (2 - 1) +1 = 4，到4后面不用循环了，因为已经只剩一个元素，递归不出结果集
        for(let i = startIndex;i<=n-(k - tempArr.length-1);i++){
            tempArr.push(i)
            backTracking(n,k,i+1,tempArr)
            tempArr.pop()
        }
    }
    backTracking(n,k,1,[])
    return reslut
};
// @lc code=end

