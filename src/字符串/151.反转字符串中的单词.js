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
    const resArr = Array.from(s)
    //删除空格
    removeSpace(resArr)
    //翻转全部
    reverse(resArr,0,resArr.length-1)
    // 翻转单词
    let start = 0
    for(let i=0;i<=resArr.length;i++){
        //当遇到空格时，则证明是单词，把start到i的字符串翻转
        if(resArr[i] === ' ' || i === resArr.length){
            reverse(resArr,start,i-1)
            start = i + 1
        }
    }
    return resArr.join('')
};
const removeSpace = (arr) => {
    let fast = slow = 0
    while(fast < arr.length){
        //上一个是空格或者首个时，删除空格
        if(arr[fast] === ' '&&(arr[fast-1] === ' '|| fast===0)){
            fast++
        }else{
            arr[slow++] = arr[fast++]
        }
    }
    //处理末尾空格并修改数组长度
    arr.length = arr[slow-1] === ' '? slow-1 : slow
}
const reverse = (s,l,r)=>{
    while(l<r){
        [s[l],s[r]] = [s[r],s[l]]
        l++;
        r--;
    }
}
// @lc code=end

