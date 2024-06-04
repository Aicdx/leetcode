/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = [],len = nums.length;
    for(let i=0;i<len;i++){
        let l = i+1,r = len-1,iNum = nums[i]
        if(iNum>0) return res
        if(iNum === nums[i-1]) continue;
        while(l < r){
            let lNum = nums[l],rNum = nums[r];
            sum = iNum + lNum + rNum;
            if(sum < 0) l++
            else if(sum>0) r--
            else{
                res.push([iNum,lNum,rNum])
                while(l<r&& nums[l] === nums[l+1]){
                    l++
                }
                while(l<r && nums[r] === nums[r-1]){
                    r--
                }
                l++;
                r--
            }
        }
    }
    return res
};
// @lc code=end

