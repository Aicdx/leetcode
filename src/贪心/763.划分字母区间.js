/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const hash = {}
    // 第一次遍历，记录字母最后一次出现的下标
    for(let i=0;i<s.length;i++){
        hash[s[i]] = i
    }
    let left=0,right = 0;
    let resArr = []
    // 第二次遍历，寻找区间
    for(let i=0;i<s.length;i++){
        // 每当遇到新字母，右边界更新为当前截取字母中最后出现的最大值
        right = Math.max(right,hash[s[i]])
        // 当前遍历到了最大值
        if(i === right){
            resArr.push(right-left+1)
            right = 0
            left = i+1
        }
    }
    return resArr
};
// @lc code=end

