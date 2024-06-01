/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // map哈希表记录nums1中数字出现频率
    const map = {}
    const res = []
    for(let num of nums1){
        if(map[num]){
            map[num] ++
        }else{
            map[num] = 1
        }
    }

    for(let num of nums2){
        //当num在nums1出现过
        if(map[num] > 0){
            // 插入结果
            res.push(num)
            // 哈希表中减掉一次
            map[num] --
        }
    }
    return res
};
// @lc code=end

