/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    let len = 0
    const queue = []
    if(root) queue.push(root);
    while(queue.length){
        let size = queue.length
        while(size--){
            const node = queue.shift()
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        len++
    }
    return len
};
// @lc code=end

