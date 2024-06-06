/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //哈希表法，创建外层hash，用于记录结果
    const map = new Object();
    const base = 'a'.charCodeAt()
    for(let s of strs){
        // 创建内存hash，记录字母异位词哈希值
        const resSet = new Array(26).fill(0);
        for(let i of s){
            resSet[i.charCodeAt() - base]++
        }
        // 判断此次循环i的哈希值是否存在于map
        map[resSet]?map[resSet].push(s):map[resSet] = [s]
    }
    return Object.values(map)
};
// @lc code=end

