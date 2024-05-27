/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l=0,n=0;
    let max = 0;
    let arr = [fruits[l]]
    for(let r=0;r<fruits.length;r++){
        if(!arr.includes(fruits[r])){
            if(arr.length <= 1){
                arr[1] = fruits[r]
            }else{
                l = n
                arr[0] = fruits[r - 1]
                arr[1] = fruits[r]
            }
        }
        if (fruits[r] !== fruits[n]){
            n = r
        }
        max = Math.max(max,r-l +1)
    }
    return max
};
// @lc code=end

