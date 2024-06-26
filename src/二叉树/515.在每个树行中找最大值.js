/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
    const res = [],queue = []
    if(root) queue.push(root);
    while(queue.length){
        let max = -Infinity
        let size = queue.length;
        while(size--){
            const node = queue.shift()
            max = Math.max(max,node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(max)
    }
    return res
};
// @lc code=end

