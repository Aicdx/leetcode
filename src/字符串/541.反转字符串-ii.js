/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let resArr = s.split("")
    let len = s.length
    for(let i=0;i<len;i+= 2*k){
        let left = i,right = i+k > len ? len -1 :i + k-1;
        reverse(resArr,left,right)
    }
    return resArr.join("")
};
const reverse = (s,l,r)=>{
    while(l<r){
        [s[l],s[r]] = [s[r],s[l]]
        l++;
        r--;
    }
    return s
}
// @lc code=end

