/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let resSet = new Array(26).fill(0)
    const base = 'a'.charCodeAt()
    for(let i of s){
        resSet[i.charCodeAt() - base] ++
    }
    for(let i of t){
        const curI = i.charCodeAt() - base
        if(!resSet[curI]) return false;
        resSet[curI] -- ;
    }
    return true
};
// @lc code=end

