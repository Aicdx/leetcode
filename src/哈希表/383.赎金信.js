/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 和有效字母异位词不一样的地方在与可以长度不一致，包含关系
    const resSet = new Array(26).fill(0),
    base = 'a'.charCodeAt()

    for(let i of magazine){
        resSet[i.charCodeAt() - base] ++;
    }

    for(let i of ransomNote){
        const curI = i.charCodeAt() - base
        if(!resSet[curI]) return false;
        resSet[curI] --
    }
    return true
};
// @lc code=end

