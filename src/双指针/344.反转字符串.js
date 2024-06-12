/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    reverse(s,0,s.length-1)
};
const reverse = function(arr,l,r){
    while(l<r){
        [arr[l],arr[r]] = [arr[r],arr[l]]
        l++;
        r--
    }
}
// @lc code=end

