/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let queue = []
    //按身高排序
    people.sort((a,b)=>{
        if(a[0] !== b[0]){
            return b[0] - a[0]
        }else{
            return a[1]-b[1]
        }
    })
    //根据第二个下标k插入
    for(let i=0;i<people.length;i++){
        queue.splice(people[i][1],0,people[i])
    }
    return queue
};
// @lc code=end

