/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let reslut = 0
    let index = s.length - 1;
    //遍历胃口
    for(let i =g.length-1;i>=0;i--){
        // 当满足小孩胃口，饼干--
        if(index >= 0 && s[index] >= g[i]){
            reslut++;
            index--
        }
    }
    return reslut
};
// @lc code=end

