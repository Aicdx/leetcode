/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const len = p.length;
    const res = []
    for(let i = 0;i<=s.length - len;i++){
        let t = ''
        for(let j=i;j< i+len;j++){
            t += s[j]
        }
        if(isAnagram(t,p)){
            res.push(i)
        }
    }
    return res
};
const isAnagram = function(s, t) {
    //长度不一致返回
    if(s.length !== t.length) return false;
    // 创建字母表
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

