/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0).map(()=> new Array(n).fill(0))
    let num = 1;
    let top=0,
    right= n-1,
    bottom = n-1,
    left = 0;
    while(num<= n*n){
        //上行
        for(let i=left;i<=right;i++){
            matrix[top][i] = num
            num++
        }
        top++
        for(let i=top;i<=bottom;i++){
            matrix[i][right] = num
            num++
        }
        right--;
        for(let i=right;i>=left;i--){
            matrix[bottom][i] = num
            num++
        }
        bottom--
        for(let i =bottom;i>=top;i--){
            matrix[i][left] = num
            num ++
        }
        left++
    }
    return matrix
};
// @lc code=end

