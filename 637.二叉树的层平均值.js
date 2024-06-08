/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const res = [],queue = []
    if(root) queue.push(root);
    while(queue.length){
        let sum = 0
        let size = queue.length
        let count = 0
        while(size--){
            const node = queue.shift()
            count++
            sum+= node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(sum/count)
    }
    return res
 };
// @lc code=end

