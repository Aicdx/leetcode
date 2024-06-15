/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // 所有可能的分割方案。即为回溯算法，直接套公式
    const resArr = []
    const len = s.length;
    const backTracking = (s,startIndex,route)=>{
        //当遍历到最后一个，收集结果集
        if(startIndex >= len){
            resArr.push([...route])
            return;
        }
        for(let i =startIndex;i<len;i++){
            //不是回文跳过
            if(!isPalindrome(s,startIndex,i)) continue;
            // 其实就是index是上一层已经确定了的分割线，
            // i是这一层试图寻找的新分割线
            // 所以传入route是i+1
            route.push(s.slice(startIndex,i+1));
            backTracking(s,i+1,route);
            route.pop()
        }
    }
    backTracking(s,0,[]);
    return resArr;
};
// 判断是否为回文子串
const isPalindrome = (s,l,r)=>{
    // for(let i = l,j = r;i<j ; i++,j--){
    //     if(s[i] !== s[j]) return;
    // }
    // return true;
    while(l<r){
        if(s[l++] !== s[r--]) return false;
    }
    return true
}
// @lc code=end

