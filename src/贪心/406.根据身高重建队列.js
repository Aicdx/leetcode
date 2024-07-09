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
    // console.log(people)
    // [ [ 4, 4 ], [ 5, 0 ], [ 5, 2 ], [ 6, 1 ], [ 7, 0 ], [ 7, 1 ] ]
    for(let i =0;i<people.length;i++){
        //直接把people[i][1]的下标当做队列下标，因为后面都是比自己高的
        queue.splice(people[i][1],0,people[i])
    }
    return queue
};
// @lc code=end

