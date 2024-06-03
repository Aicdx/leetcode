/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0) return []
    const res = []
    let top = 0,
    right = matrix[0].length-1,
    bottom = matrix.length-1,
    left =0;
    while(top<=bottom&&left<=right){
        //上行 从左往右
        for(let i = left;i<=right;i++){
            res.push(matrix[top][i])
        }
        top ++
        //右列 从上往下
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        right --;
        if (top > bottom || left > right) break
        //下行 从右到左
        for(let i = right;i>=left;i--){
            res.push(matrix[bottom][i])
        }
        bottom--;
        //左列 从下往上
        for(let i = bottom;i>=top;i--){
            res.push(matrix[i][left])
        }
        left++
    }
    return res
};
// @lc code=end

