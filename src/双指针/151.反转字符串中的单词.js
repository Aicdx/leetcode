/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //转数组
    let resArr = Array.from(s)
    // 去除空格
    removeSpace(resArr)
    // 整体翻转
    reverse(resArr,0,resArr.length-1)
    // 单词翻转
    let startIndex = 0
    for(let i=0;i<=resArr.length;i++){
        if(resArr[i]===' '||i===resArr.length){
            reverse(resArr,startIndex,i-1)
            startIndex = i+1
        }
    }
    return resArr.join('')
};
const removeSpace = function(arr){
    let fast=0,slow=0;
    while(fast<arr.length){
        if(arr[fast] === ' '&&(arr[fast-1]===' '||fast===0)){
            fast++
        }else{
            arr[slow++] = arr[fast++]
        }
    }
    arr.length = arr[slow-1] ===' '?slow-1:slow
}
const reverse = function(arr,l,r){
    while(l<r){
        [arr[l],arr[r]] = [arr[r],arr[l]]
        l++
        r--
    }
}
// @lc code=end

