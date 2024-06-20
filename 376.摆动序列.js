/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
   if(nums.length <= 1) return nums.length;
//    默认最后一个为摆动
   let reslut = 1;
   let preDiff = 0;
   let curDiff = 0;
//    只遍历到倒数第一个
   for(let i=0;i<nums.length-1;i++){
        // 记录curDiff
        curDiff = nums[i+1] - nums[i]
        // 当有摆动
        if(curDiff > 0&&preDiff<=0||curDiff<0&&preDiff>=0){
            reslut++;
            // 记录preDiff
            preDiff = curDiff;
        }
   }
   return reslut
};
// @lc code=end

