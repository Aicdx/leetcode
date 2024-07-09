/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0;
    let sum = 0;
    let resIndex = 0;
    for(let i=0;i<gas.length;i++){
        let tempDiff = gas[i] - cost[i]
        total += tempDiff;
        sum += tempDiff;
        if(sum<0){
            resIndex = i+1
            sum = 0
        }
    }
    //累计结果都为负数，证明怎么也不够油
    if(total<0) return -1;
    // 只循环一次，因为结果只有唯一解
    return resIndex
};
// @lc code=end

