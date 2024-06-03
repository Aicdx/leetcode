/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    // 滑动窗口
    const len = fruits.length
    //定义篮子为哈希表
    const map = new Map();
    let left=0;let max = 0
    for(let right=0;right<len;right++){
        // 滑动右指针直到超出两种水果
        map.set(fruits[right],(map.get(fruits[right])||0) +1)
        while(map.size > 2){
            //当篮子超过两种水果时剪枝，把左边的水果全部抛掉
            map.set(fruits[left],map.get(fruits[left]) -1)
            if(map.get(fruits[left]) === 0){
                map.delete(fruits[left])
            }
            // 滑动左指针直到只剩两种水果
            left++;
        }
        max = Math.max(max,right-left+1)
    }
    return max
};
// @lc code=end

